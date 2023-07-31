import React, { useState } from 'react';

import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import { skills } from '../../data/data';
import { PicsSkill } from '../../types/pictures';

type SwiperImageProps = {
    onClick: (picture: PicsSkill) => void;
};

export function SwiperImage({ onClick }: SwiperImageProps) {

    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 4 },
    };


    const items = skills.map((skills, index) => {
        return (
            <div className="item">
                <div key={index}>
                    <div
                        className='swiper-slide w-auto m-[10px] cursor-pointer p-5
                hover:bg-zinc-300 rounded-sm'
                        onClick={() => onClick(skills)}
                    >

                        <img
                            src={skills.src}
                            className='w-full h-auto rounded-lg shadow-2xl object-cover max-h-full'
                            alt={`Skill ${index + 1}`}
                        />
                    </div>
                </div>
            </div>);
    });

    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1500}
            animationDuration={1500}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite
            mouseTracking
            responsive={responsive}
            items={items}
        />
    );
}