

import { curriculoLink } from '../../data/data'


const CurriculoButton = (srcImg: any) => {

  const linkCurriculo = () => {
    window.open(srcImg, '_blank'); // Abre o link em uma nova aba para download
  };

  return (
    <button className="" onClick={linkCurriculo}>
      <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
        <img className="max-w-full fill-current text-gray-400" width="125" height="39" src={srcImg.src.src}/>
      </div>
    </button>
  );
};

export default CurriculoButton;
