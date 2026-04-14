import { useLanguageContext } from "@/hooks/useLanguageContext";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const CtaSection = () => {
  const { t } = useLanguageContext();
  return (
    <Container>
      <div className="rounded-2xl sm:rounded-3xl border border-[#2A3872] bg-linear-to-r from-[#0F1A47] via-[#0B1538] to-[#111D4C] p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5 lg:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl leading-tight font-semibold text-white mb-1.5">
              {t("footer.ctaTitle")}
            </h3>
            <p className="font-poppins text-xs sm:text-sm lg:text-base text-[#C8D3F6]">
              {t("footer.ctaSubtitle")}
            </p>
          </div>

          <Link
            to="/request-quote"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#E7ECFF] px-4 sm:px-5 py-2.5 sm:py-3 text-[#122464] font-poppins font-semibold text-sm sm:text-base w-full sm:w-auto"
          >
            {t("footer.requestQuoteCta")}
            <MoveRight
              className="size-4.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CtaSection;
