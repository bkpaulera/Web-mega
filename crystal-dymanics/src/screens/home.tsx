
import { useTranslation } from "react-i18next"
import { Hero } from "../components/Hero"
import { SkillsSection } from "../components/SkillsSection";
import { SwiperHero } from "../components/Carrossel/SwiperHero";
export function Home() {

    const { t } = useTranslation();

    return (
            <div className="mr-5 ml-5 mt-10">
                <div className="chat chat-start">
                    <div className="chat-bubble">
                        <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            {t('home.mySkills')}
                        </h1>
                    </div>
                </div>
                <p className="max-w-2xl font-light text-200 lg:mb-8 md:text-lg lg:text-xl ">
                    {t('home.textSkills')}
                </p>
            <SwiperHero />
            </div>
    )
}