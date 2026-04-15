import Container from "../shared/Container";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import useFetchData from "@/hooks/useFetchData";

const HeroSection = () => {
  const { language } = useLanguageContext();
  const { data } = useFetchData("/cms/home-banner");

  return (
    <div className="relative">
      <Container className="relative z-10 text-white pt-30 pb-20 sm:py-36 lg:py-40 xl:py-55">
        <h1 className="text-[28px] sm:text-4xl lg:text-5xl xl:text-[64px] font-semibold leading-tight sm:max-w-[90%] min-h-25 xl:min-h-50">
          {language === "en" ? data?.data?.title_en : data?.data?.title_fr}
        </h1>
      </Container>
      <figure className="absolute inset-0">
        {data?.data?.banner_full_url ? (
          <img
            src={data?.data?.banner_full_url}
            alt="Hero Banner"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gray-300 flex items-center justify-center" />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </figure>
    </div>
  );
};

export default HeroSection;
