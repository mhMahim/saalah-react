// import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { useStateContext } from "@/hooks/useStateContext";
import { Mail, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";

const ContactUsPage = () => {
  const { t } = useLanguageContext();
  const { systemSettingsData } = useStateContext();

  const contactEmail =
    systemSettingsData?.data?.contact_email ||
    systemSettingsData?.data?.email ||
    "not available";
  const contactPhone =
    systemSettingsData?.data?.number ||
    systemSettingsData?.data?.phone ||
    "not available";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative overflow-hidden">
      {/* <div className="pointer-events-none absolute -left-30 -top-24 size-72 rounded-full bg-[#122464]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-30 bottom-0 size-80 rounded-full bg-[#2E7D5A]/8 blur-3xl" /> */}

      <Container className="py-7 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 sm:mb-7 lg:mb-8 text-center">
            <h1 className="font-poppins text-[#212B36] text-2xl sm:text-3xl lg:text-[40px] leading-tight font-semibold mb-2 sm:mb-3">
              {t("contact.title")}
            </h1>
            <p className="font-poppins text-sm sm:text-base text-[#637381] leading-6 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 sm:gap-5 lg:gap-6">
            <aside className="relative rounded-2xl sm:rounded-3xl border border-[#DFE3E8] bg-linear-to-b from-[#122464] to-[#101B4A] p-5 sm:p-6 lg:p-7 text-white">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[52px] bg-white/7" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-[38px] bg-white/5" />

              <div className="relative z-10">
                <h2 className="font-poppins text-xl sm:text-2xl leading-tight font-semibold mb-2">
                  {t("contact.info.title")}
                </h2>
                <p className="font-poppins text-sm sm:text-base leading-6 text-[#D7DDEE] mb-6 sm:mb-8">
                  {t("contact.info.subtitle")}
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="group rounded-xl border border-white/20 bg-white/8 backdrop-blur-xs p-4 flex items-start gap-3 transition-colors hover:bg-white/15"
                  >
                    <span className="mt-0.5 rounded-lg bg-white/15 p-2">
                      <Mail className="size-4.5 text-white" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-poppins text-xs uppercase tracking-[0.08em] text-[#C9D2EC] mb-1">
                        {t("contact.info.email")}
                      </span>
                      <span className="block font-poppins text-sm sm:text-base font-medium text-white break-all">
                        {contactEmail}
                      </span>
                    </span>
                  </a>

                  <a
                    href={`tel:${String(contactPhone).replace(/[^\d+]/g, "")}`}
                    className="group rounded-xl border border-white/20 bg-white/8 backdrop-blur-xs p-4 flex items-start gap-3 transition-colors hover:bg-white/15"
                  >
                    <span className="mt-0.5 rounded-lg bg-white/15 p-2">
                      <Phone
                        className="size-4.5 text-white"
                        strokeWidth={1.8}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-poppins text-xs uppercase tracking-[0.08em] text-[#C9D2EC] mb-1">
                        {t("contact.info.phone")}
                      </span>
                      <span className="block font-poppins text-sm sm:text-base font-medium text-white break-all">
                        {contactPhone}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#DFE3E8] bg-white p-4 sm:p-5 lg:p-6"
            >
              <h2 className="font-poppins text-[#212B36] text-xl sm:text-2xl leading-tight font-semibold mb-4 sm:mb-5">
                {t("contact.form.title")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("contact.form.namePlaceholder")}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="contact-phone"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={t("contact.form.phonePlaceholder")}
                    className="h-11 sm:h-12 rounded-lg border-[#DFE3E8] px-4 font-poppins text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="font-poppins text-sm text-[#637381]"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder={t("contact.form.messagePlaceholder")}
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
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </Container>

      {/* <Footer /> */}
    </section>
  );
};

export default ContactUsPage;
