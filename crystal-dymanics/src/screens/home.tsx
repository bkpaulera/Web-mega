
import { useTranslation } from "react-i18next"
import { Hero } from "../components/Hero"
import { SkillsSection } from "../components/SkillsSection";

export function Home() {

    const { t } = useTranslation();

    return (
        <div className="">
            <Hero />
            <div className="container mx-auto justify-start rounded m-5 ">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                    {t('home.mySkills')}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-200 lg:mb-8 md:text-lg lg:text-xl text-violet-200">
                    {t('home.textSkills')}
                </p>
            </div>
            <SkillsSection />
        </div>
    )
}