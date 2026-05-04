"use client";

import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DialogCityInput, {
  type SelectedLocation,
} from "@/components/shared/DialogCityInput";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const locationSchema = z.object({
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  countryCode: z.string().min(1, "Country code is required"),
  lat: z.number(),
  lon: z.number(),
  displayName: z.string().min(1, "Display name is required"),
});

const formSchema = z.object({
  departureCity: locationSchema,
  arrivalCity: locationSchema,
  weight: z.string().min(1, "Weight is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface TripCity {
  city: string;
  country: string;
  countryCode: string;
}

interface UpdateTripDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripId: number;
  tripsQueryKey: string;
  initialValues: {
    departureCity: TripCity;
    arrivalCity: TripCity;
    weight: string;
    date: string;
    time: string;
  };
}

const inputCls =
  "w-full border border-[#DFE3E8] rounded-xl px-5 py-4 text-sm sm:text-base placeholder:text-[#919EAB] text-[#212B36] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#122464] h-14";

const buildLocation = (city: TripCity): SelectedLocation => ({
  city: city.city,
  country: city.country,
  countryCode: city.countryCode,
  lat: 0,
  lon: 0,
  displayName: `${city.city}, ${city.country}`,
});

const UpdateTripDialog = ({
  open,
  onOpenChange,
  tripId,
  tripsQueryKey,
  initialValues,
}: UpdateTripDialogProps) => {
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const defaultValues = useMemo<FormValues>(
    () => ({
      departureCity: buildLocation(initialValues.departureCity),
      arrivalCity: buildLocation(initialValues.arrivalCity),
      weight: initialValues.weight,
      date: initialValues.date,
      time: initialValues.time,
    }),
    [initialValues],
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (open) {
      form.reset(defaultValues);
    }
  }, [open, form, defaultValues]);

  const departureError =
    form.formState.errors.departureCity?.city?.message ||
    form.formState.errors.departureCity?.country?.message ||
    form.formState.errors.departureCity?.countryCode?.message;
  const arrivalError =
    form.formState.errors.arrivalCity?.city?.message ||
    form.formState.errors.arrivalCity?.country?.message ||
    form.formState.errors.arrivalCity?.countryCode?.message;

  const onSubmit = async (values: FormValues) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to update trips.");
      return;
    }

    const payload = [
      {
        departureCity: {
          city: values.departureCity.city,
          country: values.departureCity.country,
          countryCode: values.departureCity.countryCode,
        },
        weight: values.weight,
        date: values.date,
        time: values.time,
        arrivalCity: {
          city: values.arrivalCity.city,
          country: values.arrivalCity.country,
          countryCode: values.arrivalCity.countryCode,
        },
      },
    ];

    try {
      setIsPending(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/trips/${tripId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success(response?.data?.message ?? "Trip updated successfully!");
      queryClient.invalidateQueries({ queryKey: [tripsQueryKey] });
      onOpenChange(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to update trip.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border border-[rgba(92,133,255,0.5)] rounded-2xl sm:rounded-3xl lg:rounded-4xl px-5 sm:px-10 lg:px-12 py-6 sm:py-8 w-full max-w-[calc(100%-2rem)] sm:max-w-3xl bg-white shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-6 font-poppins">
          <div>
            <h3 className="text-[#212B36] text-2xl sm:text-3xl font-bold">
              Update Trip
            </h3>
            <p className="text-[#637381] text-sm sm:text-base leading-6 mt-1">
              Edit your trip details and save changes.
            </p>
          </div>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm sm:text-base leading-6 text-[#637381]">
                Departure city
              </label>
              <Controller
                control={form.control}
                name="departureCity"
                render={({ field }) => (
                  <DialogCityInput
                    value={field.value}
                    onSelect={(location) => field.onChange(location)}
                    placeholder="Search departure city"
                    className={inputCls}
                    hasError={!!departureError}
                    disabled={isPending}
                  />
                )}
              />
              {departureError && (
                <p className="text-xs text-red-500">{departureError}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm sm:text-base leading-6 text-[#637381]">
                Arrival city
              </label>
              <Controller
                control={form.control}
                name="arrivalCity"
                render={({ field }) => (
                  <DialogCityInput
                    value={field.value}
                    onSelect={(location) => field.onChange(location)}
                    placeholder="Search arrival city"
                    className={inputCls}
                    hasError={!!arrivalError}
                    disabled={isPending}
                  />
                )}
              />
              {arrivalError && (
                <p className="text-xs text-red-500">{arrivalError}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-poppins text-sm sm:text-base leading-6 text-[#637381]">
                  Date
                </label>
                <Input
                  type="date"
                  disabled={isPending}
                  className={inputCls}
                  {...form.register("date")}
                />
                {form.formState.errors.date?.message && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.date?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-poppins text-sm sm:text-base leading-6 text-[#637381]">
                  Time
                </label>
                <Input
                  type="time"
                  disabled={isPending}
                  className={inputCls}
                  {...form.register("time")}
                />
                {form.formState.errors.time?.message && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.time?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm sm:text-base leading-6 text-[#637381]">
                Weight (kg)
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                disabled={isPending}
                className={inputCls}
                {...form.register("weight")}
              />
              {form.formState.errors.weight?.message && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.weight?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <Button
                type="button"
                variant="noStyle"
                onClick={() => onOpenChange(false)}
                disabled={isPending}
                className="h-12 sm:h-14 flex-1 rounded-xl bg-[#DFE3E8] px-4 sm:px-5.5 py-3 sm:py-4 font-poppins text-sm sm:text-base font-semibold text-[#212B36] disabled:opacity-60"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="noStyle"
                disabled={isPending}
                className="h-12 sm:h-14 flex-1 rounded-xl border border-[#122464] bg-[#122464] px-4 sm:px-5.5 py-3 sm:py-4 font-poppins text-sm sm:text-base font-semibold text-[#EBF0FF] disabled:opacity-60"
              >
                {isPending ? "Updating..." : "Update Trip"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTripDialog;
