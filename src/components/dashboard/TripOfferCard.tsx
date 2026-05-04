"use client";

import { useState } from "react";
import { ArrowIcon, CalenderIcon, WatchIcon } from "@/assets/icons/icon";
import UpdateTripDialog from "@/components/dialogs/UpdateTripDialog";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type TripStatus = "Approved" | "Pending" | "Rejected";

interface TripOfferCardProps {
  id: number;
  departureCity: string;
  departureCountry: string;
  departureCountryCode: string;
  arrivalCity: string;
  arrivalCountry: string;
  arrivalCountryCode: string;
  status: TripStatus;
  date: string;
  weight: string;
  weightValue: string;
  time: string;
  wight_per_kg: number;
  tripsQueryKey: string;
}

const TripOfferCard: React.FC<TripOfferCardProps> = ({
  id,
  departureCity,
  departureCountry,
  departureCountryCode,
  arrivalCity,
  arrivalCountry,
  arrivalCountryCode,
  status,
  date,
  weight,
  weightValue,
  time,
  wight_per_kg,
  tripsQueryKey,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();

  const getStatusStyles = () => {
    switch (status) {
      case "Approved":
        return "text-[#229A16] bg-[#E9FCD4]";
      case "Pending":
        return "text-[#B78103] bg-[#FFF8E1]";
      case "Rejected":
        return "text-[#B72136] bg-[#FFEBEE]";
      default:
        return "text-[#229A16] bg-[#E9FCD4]";
    }
  };

  const handleDeleteTrip = async () => {
    if (isDeleting) return;
    const confirmed = window.confirm("Delete this trip?");
    if (!confirmed) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to delete trips.");
      return;
    }

    try {
      setIsDeleting(true);
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/trips/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success(response?.data?.message ?? "Trip deleted successfully!");
      queryClient.invalidateQueries({ queryKey: [tripsQueryKey] });
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to delete trip.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-[#F9FAFB] border border-[#DFE3E8] flex flex-col gap-4 p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-[0px_4px_8px_0px_rgba(191,191,191,0.08)]">
      {/* Route Row */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col items-start gap-2">
          <span
            className={`px-2.5 py-1 rounded-full font-poppins font-semibold text-xs sm:text-sm leading-5 shrink-0 ${getStatusStyles()}`}
          >
            {status}
          </span>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap flex-1 min-w-0">
            {/* Departure */}
            <div className="flex flex-col min-w-0">
              <p className="font-poppins text-xs sm:text-sm text-[#637381] leading-5 truncate">
                {departureCountry}
              </p>
              <p className="font-poppins font-semibold text-[#212B36] text-base sm:text-lg lg:text-xl leading-tight truncate">
                {departureCity}
              </p>
            </div>

            <ArrowIcon className="size-5 sm:size-6 lg:size-7 text-[#637381] shrink-0" />

            {/* Arrival */}
            <div className="flex flex-col min-w-0">
              <p className="font-poppins text-xs sm:text-sm text-[#637381] leading-5 truncate">
                {arrivalCountry}
              </p>
              <p className="font-poppins font-semibold text-[#212B36] text-base sm:text-lg lg:text-xl leading-tight truncate">
                {arrivalCity}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-poppins font-bold text-[#122464] text-lg sm:text-xl xl:text-2xl leading-tight text-nowrap">
            €{wight_per_kg}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#DFE3E8] w-full" />

      {/* Date, Time, Weight Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3 sm:gap-5 items-center">
          <div className="flex gap-2 items-center">
            <CalenderIcon className="size-4 sm:size-5 text-[#122464]" />
            <p className="font-poppins font-medium text-[#122464] text-sm sm:text-base leading-6">
              {date}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <WatchIcon className="size-4 sm:size-5 text-[#637381]" />
            <p className="font-poppins text-[#637381] text-sm sm:text-base leading-6">
              {time}
            </p>
          </div>
        </div>
        <p className="font-poppins font-semibold text-[#212B36] text-sm sm:text-base leading-6">
          {weight}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsEditOpen(true)}
          disabled={isDeleting}
          className="h-9 sm:h-10 rounded-lg border border-[#DFE3E8] px-3 sm:px-4 font-poppins text-sm sm:text-base font-semibold text-[#212B36] disabled:opacity-60 cursor-pointer"
        >
          Edit Trip
        </button>

        <button
          type="button"
          onClick={handleDeleteTrip}
          disabled={isDeleting}
          className="h-9 sm:h-10 rounded-lg border border-[#FFBEC5] bg-[#FFEBEE] px-3 sm:px-4 font-poppins text-sm sm:text-base font-semibold text-[#B72136] disabled:opacity-60 cursor-pointer"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      <UpdateTripDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        tripId={id}
        tripsQueryKey={tripsQueryKey}
        initialValues={{
          departureCity: {
            city: departureCity,
            country: departureCountry,
            countryCode: departureCountryCode,
          },
          arrivalCity: {
            city: arrivalCity,
            country: arrivalCountry,
            countryCode: arrivalCountryCode,
          },
          weight: weightValue,
          date,
          time,
        }}
      />
    </div>
  );
};

export default TripOfferCard;
