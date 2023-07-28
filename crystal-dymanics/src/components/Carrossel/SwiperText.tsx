import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Autoplay } from 'swiper';

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
            <Swiper
                speed={2000}
                pagination={false}
                loop={true}
                watchOverflow={true}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay, FreeMode]}
                className=""
            >
                    <SwiperSlide className="">
                        <li className="opacity-30 font-bold whitespace-nowrap mb-4">
                            {t('home.heroText')}
                        </li>
                    </SwiperSlide>
            </Swiper>
        </div>
    );
}
