import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Title() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center">
      <div className="stats shadow p-4 w-full">
        <div className="stat">
          <div className="stat-title text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
            {t("Title.titleText")}
          </div>
          <div className="stat-value text-primary text-lg md:text-xl lg:text-2xl text-center mb-2">
            {t("home.message")}
          </div>
          <div className="stat-desc text-base md:text-lg lg:text-xl text-center">
            <span>{t("home.heroText")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
