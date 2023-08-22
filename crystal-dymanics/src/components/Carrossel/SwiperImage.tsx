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
            <div className='group relative' key={index}>
                <div
                    className='relative h-80 w-auto overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75'
                    onClick={() => onClick(skills)}
                >
                    <img
                        src={skills.src}
                        className='h-auto w-auto object-cover object-center'
                        alt={`Skill ${index + 1}`}
                    />
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