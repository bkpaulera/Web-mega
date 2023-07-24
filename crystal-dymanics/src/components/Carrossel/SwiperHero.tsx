import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from "../../data/data";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay,Pagination, Navigation ,FreeMode} from 'swiper/modules';
import { Pics } from '../../types/pictures';

export function SwiperHero() {

    const [pictures, setPictures] = useState<Pics[]>([]);

  return (
    <div className='container justify-center'>
    <Swiper
      slidesPerView={3}
      freeMode={true}
      watchOverflow={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Pagination, Navigation, Autoplay, FreeMode]}
      className="swiper-container overflow-visible pt-6 pr-4"
    >
      {skills.map((skill, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="swiper-slide w-auto m-[10px]"> {/* Adicione um div wrapper */}
              <img
                src={skill.src}
                className="w-full h-auto rounded-lg shadow-2xl object-cover max-h-full" // Estilos para tornar a imagem responsiva
                alt={`Skill ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
  
  );
}
