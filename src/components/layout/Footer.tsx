import { useStateContext } from "@/hooks/useStateContext";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { Link } from "react-router";
import Container from "../shared/Container";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Footer = () => {
  const { systemSettingsData } = useStateContext();
  const { t } = useLanguageContext();

  const contactEmail =
    systemSettingsData?.data?.contact_email ||
    systemSettingsData?.data?.email ||
    "not available";
  const contactPhone =
    systemSettingsData?.data?.contact_phone ||
    systemSettingsData?.data?.number ||
    systemSettingsData?.data?.phone ||
    "not available";

  const title = systemSettingsData?.data?.title || "Logo";

  return (
    <footer className="relative bg-[#080F2A] text-[#919EAB] text-sm overflow-hidden">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#193180]/18 blur-3xl" />

      <Container>
        <div className="upper-portion py-6 sm:py-8 lg:py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-3 sm:gap-4 lg:gap-5">
            <div className="rounded-2xl border border-[#2E3A67] bg-white/4 p-4 sm:p-5">
              <div className="font-poppins text-[#EAF0FF] text-lg sm:text-xl font-semibold mb-2">
                {title}
              </div>
              <p className="font-poppins text-xs sm:text-sm text-[#B8C6EA] leading-6 max-w-md">
                {t("footer.brandDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-[#2E3A67] bg-white/4 p-4 sm:p-5">
              <h4 className="font-poppins text-sm uppercase tracking-[0.08em] text-[#8EA0D6] mb-3">
                {t("footer.contactLink")}
              </h4>

              <div className="space-y-2.5">
                <a
                  href={`mailto:${contactEmail}`}
                  className="group flex items-start gap-2.5 rounded-lg border border-[#2F3E70] bg-white/3 px-3 py-2.5 transition-colors hover:bg-white/8"
                >
                  <span className="rounded-md bg-white/10 p-1.5 mt-0.5">
                    <Mail
                      className="size-3.5 text-[#D6DDF4]"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.08em] text-[#8EA0D6]">
                      {t("footer.email")}
                    </span>
                    <span className="block text-xs sm:text-sm text-[#EDF1FF] font-medium break-all">
                      {contactEmail}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${String(contactPhone).replace(/[^\d+]/g, "")}`}
                  className="group flex items-start gap-2.5 rounded-lg border border-[#2F3E70] bg-white/3 px-3 py-2.5 transition-colors hover:bg-white/8"
                >
                  <span className="rounded-md bg-white/10 p-1.5 mt-0.5">
                    <Phone
                      className="size-3.5 text-[#D6DDF4]"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.08em] text-[#8EA0D6]">
                      {t("footer.phone")}
                    </span>
                    <span className="block text-xs sm:text-sm text-[#EDF1FF] font-medium break-all">
                      {contactPhone}
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2E3A67] bg-white/4 p-4 sm:p-5">
              <h4 className="font-poppins text-sm uppercase tracking-[0.08em] text-[#8EA0D6] mb-3">
                {t("footer.quickLinks")}
              </h4>

              <div className="space-y-2">
                <Link
                  to="/contact-us"
                  className="group rounded-lg border border-[#2F3E70] bg-white/3 px-3 py-2.5 flex items-center justify-between gap-3 transition-colors hover:bg-white/8"
                >
                  <span className="text-xs sm:text-sm text-[#EDF1FF] font-medium">
                    {t("footer.contactCta")}
                  </span>
                  <ArrowRight
                    className="size-4 text-[#D6DDF4] transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.9}
                  />
                </Link>

                <Link
                  to="/request-quote"
                  className="group rounded-lg border border-[#2F3E70] bg-white/3 px-3 py-2.5 flex items-center justify-between gap-3 transition-colors hover:bg-white/8"
                >
                  <span className="text-xs sm:text-sm text-[#EDF1FF] font-medium">
                    {t("footer.requestQuoteLink")}
                  </span>
                  <ArrowRight
                    className="size-4 text-[#D6DDF4] transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.9}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-6 border-t border-[#5F6368]">
          <p className="max-w-[85%] mx-auto">
            {systemSettingsData?.data?.copyright_text || t("footer.copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
