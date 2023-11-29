import "react-alice-carousel/lib/alice-carousel.css";

import { curriculoImg } from "../../data/data";
import {
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
  BsFileEarmarkRichtextFill,
} from "react-icons/bs";
import { RiUnsplashLine } from "react-icons/ri";

export function CardSkills() {
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto flex flex-col items-center gap-2">
      {/* Item */}
      <div className="flex flex-col items-center justify-center py-2">
        <button
          className="btn-icon"
          onClick={() => window.open(curriculoImg[0].link, "_blank")}
        >
          <BsLinkedin className="max-w-full fill-current text-gray-400 w-10 h-10" />
        </button>
        <p className="text-center text-gray-500 mt-2">LinkedIn</p>
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <button
          className="btn-icon"
          onClick={() => window.open(curriculoImg[1].link, "_blank")}
        >
          <BsFileEarmarkRichtextFill className="max-w-full fill-current text-gray-400 w-10 h-10" />
        </button>
        <p className="text-center text-gray-500 mt-2">Currículo</p>
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <button
          className="btn-icon"
          onClick={() => window.open(curriculoImg[2].link, "_blank")}
        >
          <BsWhatsapp className="max-w-full fill-current text-gray-400 w-10 h-10" />
        </button>
        <p className="text-center text-gray-500 mt-2">WhatsApp</p>
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <button
          className="btn-icon"
          onClick={() => window.open(curriculoImg[3].link, "_blank")}
        >
          <BsGithub className="max-w-full fill-current text-gray-400 w-10 h-10" />
        </button>
        <p className="text-center text-gray-500 mt-2">GitHub</p>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <button
          className="btn-icon"
          onClick={() => window.open(curriculoImg[4].link, "_blank")}
        >
          <RiUnsplashLine className="max-w-full fill-current text-gray-400 w-10 h-10" />
        </button>
        <p className="text-center text-gray-500 mt-2">Unsplash</p>
      </div>
    </div>
  );
}
