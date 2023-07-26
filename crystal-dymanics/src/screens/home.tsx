
import { useTranslation } from "react-i18next"
import { SwiperHero } from "../components/Carrossel/SwiperHero";
import { SwiperText } from "../components/Carrossel/SwiperText";
export function Home() {

    const { t } = useTranslation();

    return (
            <div className="mr-5 ml-5 mt-10">
            <SwiperText />
            <SwiperHero />
            </div>
    )
}