import { useTranslation } from "react-i18next";

import useEmblaCarousel from 'embla-carousel-react';

export function SwiperText() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="chat chat-start flex">
                <div className="chat-bubble">
                    <h1 className="max-w-2xl m-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {t('home.mySkills')}
                    </h1>
                </div>
            </div>
           
        </div>
    );
}
