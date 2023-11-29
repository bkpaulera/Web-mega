import { useTranslation } from "react-i18next";
import { SwiperHero } from "../components/Carrossel/SwiperHero";
import { SwiperText } from "../components/Carrossel/SwiperText";
import { Landing } from "../components/Landing/Landing";
import { Title } from "../components/Title/Title";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="">
      <Title />
      <Landing />
      <SwiperHero />
    </div>
  );
}
