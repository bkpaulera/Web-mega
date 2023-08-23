
import 'react-alice-carousel/lib/alice-carousel.css';

import { curriculoImg } from "../../data/data";
import { BsLinkedin, BsWhatsapp, BsGithub, BsFileEarmarkRichtextFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export function CardSkills() {

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <button className="btn-icon" onClick={() => window.open(curriculoImg[0].link, '_blank')}>
                    <BsLinkedin className="max-w-full fill-current text-gray-400 w-10 h-10" />
                </button>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <button className="btn-icon" onClick={() => window.open(curriculoImg[1].link, '_blank')}>
                    <BsFileEarmarkRichtextFill className="max-w-full fill-current text-gray-400 w-10 h-10" />
                </button>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <button className="btn-icon" onClick={() => window.open(curriculoImg[2].link, '_blank')}>
                    <BsWhatsapp className="max-w-full fill-current text-gray-400 w-10 h-10" />
                </button>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <button className="btn-icon" onClick={() => window.open(curriculoImg[3].link, '_blank')}>
                    <BsGithub className="max-w-full fill-current text-gray-400 w-10 h-10" />
                </button>
            </div>
        </div>
    );
}