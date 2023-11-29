import { profilePic } from "../../data/data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardSkills } from "../CardSkills/CardSkills";

export function Landing() {
  const [showInfo, setShowInfo] = useState(false);

  const { t } = useTranslation();

  return (
    <section className="flex justify-between m-10">
      {/* Esquerda */}
      <div className="flex flex-col gap-4 w-52 m-0">
        <CardSkills />
      </div>

      {/* Direita */}
      <div className="flex flex-col gap-4 m-5 flex-grow break-after-auto">
        <div className="skeleton w-full">
          <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
              <div className="bg-primary text-primary-content md:text-3xl lg:text-8xl font-black grid place-content-center">
                {t("home.message")}
              </div>
            </div>
            <div className="diff-item-2">
              <div className="bg-base-200 text-9xl font-black grid place-content-center">
                <img src={profilePic} alt="Testimonial 01" />
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
        <div className="skeleton h-full w-full p-5 ">
          <span>{t("landing.text")}</span>
        </div>
      </div>
    </section>
  );
}
