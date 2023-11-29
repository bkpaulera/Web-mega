import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Title() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title text-2xl font-bold">
            {t("Title.titleText")}
          </div>
          <div className="stat-value text-primary text-xl">
            {t("home.message")}
          </div>
          <div className="stat-desc text-2xl">
            <span>{t("home.heroText")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
