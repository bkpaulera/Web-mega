
import { useTranslation } from "react-i18next"
import { SwiperHero } from "../components/Carrossel/SwiperHero";
import { SwiperText } from "../components/Carrossel/SwiperText";
export function Home() {

    const { t } = useTranslation();

    return (
            <div className="mt-10">
            <SwiperText />
            <SwiperHero />
            </div>
    )
}