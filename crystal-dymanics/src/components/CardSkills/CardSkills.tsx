import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { skillsItems } from '../../data/data';

export function CardSkills() {

    const items = skillsItems.map((skillsItems, index) =>
        <div
            className="font-extrabold max-w-2xl sm:text-3xl md:text-5xl xl:text-6xl whitespace-nowrap text-center text-gray-400"
            data-value={index}>
            {skillsItems.name}
        </div>,);

    return (
        <div className='container justify-center'>

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
            </div>
    );
}