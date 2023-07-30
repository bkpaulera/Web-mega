import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { skillsItems } from '../../data/data';

export function SwiperText() {

    const items = skillsItems.map((skillsItems, index) =>
        <div
            className="items-center ml-4  font-extrabold max-w-2xl sm:text-3xl md:text-5xl xl:text-6xl text-gray-400"
            data-value={index}>
            {skillsItems.name}
        </div>,);

    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1500}
            animationDuration={1500}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
    );
}