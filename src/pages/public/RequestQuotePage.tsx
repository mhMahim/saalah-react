import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { ImageUp, PackageCheck, Send, X } from "lucide-react";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

const RequestQuotePage = () => {
  const { t } = useLanguageContext();
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const syncPhotoInputFiles = (files: File[]) => {
    const input = photoInputRef.current;
    if (!input) return;

    if (files.length === 0) {
      input.value = "";
      return;
    }

    try {
      const dataTransfer = new DataTransfer();
      files.forEach((file) => dataTransfer.items.add(file));
      input.files = dataTransfer.files;
    } catch {
      input.value = "";
    }
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      setSelectedPhotos([]);
      return;
    }
    setSelectedPhotos(Array.from(files));
  };

  const handleRemovePhoto = (indexToRemove: number) => {
    setSelectedPhotos((previous) => {
      const nextFiles = previous.filter((_, index) => index !== indexToRemove);
      syncPhotoInputFiles(nextFiles);
      return nextFiles;
    });
  };

  const handleClearPhotos = () => {
    setSelectedPhotos([]);
    syncPhotoInputFiles([]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-28 -top-24 size-72 rounded-full bg-[#122464]/7 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 size-80 rounded-full bg-[#0E9F6E]/8 blur-3xl" />

      <Container className="py-7 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 sm:mb-7 lg:mb-8 text-center">
            <h1 className="font-poppins text-[#212B36] text-2xl sm:text-3xl lg:text-[40px] leading-tight font-semibold mb-2 sm:mb-3">
              {t("requestQuote.title")}
            </h1>
            <p className="font-poppins text-sm sm:text-base text-[#637381] leading-6 max-w-3xl mx-auto">
              {t("requestQuote.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-5 lg:gap-6">
            <aside className="rounded-2xl sm:rounded-3xl border border-[#DFE3E8] bg-linear-to-b from-[#122464] to-[#101B4A] p-5 sm:p-6 lg:p-7 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[52px] bg-white/7" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-[42px] bg-white/5" />

              <div className="relative z-10">
                <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  <PackageCheck className="size-4.5" strokeWidth={1.8} />
                  <span className="font-poppins text-xs sm:text-sm font-medium">
                    {t("requestQuote.side.badge")}
                  </span>
                </div>

                <h2 className="font-poppins text-xl sm:text-2xl leading-tight font-semibold mb-2 sm:mb-3">
                  {t("requestQuote.side.title")}
                </h2>
                <p className="font-poppins text-sm sm:text-base leading-6 text-[#D7DDEE] mb-5 sm:mb-6">
                  {t("requestQuote.side.description")}
                </p>

                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 font-poppins text-sm sm:text-base text-[#E6EBFF]">
                    <span className="mt-1.75 size-2 rounded-full bg-[#8EA0D6]" />
                    {t("requestQuote.side.point1")}
                  </li>
                  <li className="flex items-start gap-2.5 font-poppins text-sm sm:text-base text-[#E6EBFF]">
                    <span className="mt-1.75 size-2 rounded-full bg-[#8EA0D6]" />
                    {t("requestQuote.side.point2")}
                  </li>
                  <li className="flex items-start gap-2.5 font-poppins text-sm sm:text-base text-[#E6EBFF]">
                    <span className="mt-1.75 size-2 rounded-full bg-[#8EA0D6]" />
                    {t("requestQuote.side.point3")}
                  </li>
                </ul>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#DFE3E8] bg-white p-4 sm:p-5 lg:p-6"
            >
              <h2 className="font-poppins text-[#212B36] text-xl sm:text-2xl leading-tight font-semibold mb-4 sm:mb-5">
                {t("requestQuote.form.title")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="rq-name"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.name")}
                  </label>
                  <Input
                    id="rq-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("requestQuote.form.namePlaceholder")}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="rq-phone"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.phone")}
                  </label>
                  <Input
                    id="rq-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={t("requestQuote.form.phonePlaceholder")}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="rq-departure-city"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.departureCity")}
                  </label>
                  <Input
                    id="rq-departure-city"
                    name="departureCity"
                    type="text"
                    required
                    placeholder={t(
                      "requestQuote.form.departureCityPlaceholder",
                    )}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="rq-destination-city"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.destinationCity")}
                  </label>
                  <Input
                    id="rq-destination-city"
                    name="destinationCity"
                    type="text"
                    required
                    placeholder={t(
                      "requestQuote.form.destinationCityPlaceholder",
                    )}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="rq-item-description"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.itemDescription")}
                  </label>
                  <Input
                    id="rq-item-description"
                    name="itemDescription"
                    type="text"
                    required
                    placeholder={t(
                      "requestQuote.form.itemDescriptionPlaceholder",
                    )}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="rq-photo-upload"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.photos")}
                  </label>

                  <label
                    htmlFor="rq-photo-upload"
                    className="w-full cursor-pointer rounded-lg border border-dashed border-[#C4CDD5] bg-[#F9FAFB] px-4 py-4 sm:px-5 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-colors hover:bg-[#F4F6F8]"
                  >
                    <span className="inline-flex items-center justify-center rounded-lg bg-white border border-[#DFE3E8] p-2.5 text-[#122464] w-fit">
                      <ImageUp className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-poppins text-sm sm:text-base font-medium text-[#212B36]">
                        {t("requestQuote.form.photosCta")}
                      </span>
                      <span className="block font-poppins text-xs sm:text-sm text-[#637381] mt-0.5">
                        {t("requestQuote.form.photosHint")}
                      </span>
                    </span>
                  </label>

                  <input
                    id="rq-photo-upload"
                    name="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    ref={photoInputRef}
                    onChange={handlePhotoChange}
                    className="hidden"
                  />

                  {selectedPhotos.length > 0 && (
                    <div className="rounded-lg border border-[#DFE3E8] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#455A64]">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="font-medium">
                          {`${t("requestQuote.form.selectedPhotos")}: ${selectedPhotos.length}`}
                        </p>
                        <button
                          type="button"
                          onClick={handleClearPhotos}
                          className="text-xs sm:text-sm text-[#122464] font-semibold hover:underline"
                        >
                          {t("requestQuote.form.clearPhotos")}
                        </button>
                      </div>

                      <ul className="space-y-1.5 text-xs sm:text-sm max-h-44 overflow-y-auto pr-1">
                        {selectedPhotos.map((file, index) => (
                          <li
                            key={`${file.name}-${file.lastModified}-${index}`}
                            className="flex items-center justify-between gap-3 rounded-md border border-[#DFE3E8] bg-white px-2.5 py-1.5"
                          >
                            <span className="truncate text-[#455A64]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(index)}
                              className="inline-flex items-center gap-1 text-[#B42318] hover:text-[#912018] shrink-0"
                              aria-label={`${t("requestQuote.form.removePhoto")} ${file.name}`}
                            >
                              <X className="size-3.5" strokeWidth={2} />
                              <span>{t("requestQuote.form.removePhoto")}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="rq-message"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("requestQuote.form.message")}
                  </label>
                  <textarea
                    id="rq-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t("requestQuote.form.messagePlaceholder")}
                    className="w-full min-w-0 rounded-lg border border-[#DFE3E8] bg-transparent px-4 py-3 text-sm sm:text-base text-[#212B36] font-poppins outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] placeholder:text-[#9AA6B2]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="noStyle"
                className="mt-4 sm:mt-5 h-11 sm:h-12 rounded-lg bg-[#122464] px-5 text-white font-poppins font-semibold text-sm sm:text-base hover:bg-[#122464]/90"
              >
                <Send className="size-4.5" strokeWidth={1.8} />
                {t("requestQuote.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuotePage;
