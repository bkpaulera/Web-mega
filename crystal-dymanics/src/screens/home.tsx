
import { useTranslation } from "react-i18next"
import { SwiperHero } from "../components/Carrossel/SwiperHero";
import { SwiperText } from "../components/Carrossel/SwiperText";
import { Landing } from "../components/Landing/Landing";
export function Home() {

    const { t } = useTranslation();

    return (
            <div className="">
            <Landing />
            <SwiperHero />
            </div>
    )
}