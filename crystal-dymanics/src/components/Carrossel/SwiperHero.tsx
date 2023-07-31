import React, { useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'; // Importe os ícones de estrelas
import { PicsSkill } from '../../types/pictures';
import { skills } from '../../data/data';
import CurriculoButton from '../Buttons/CurriculoButton';
import { SwiperImage } from './SwiperImage';

// Função para renderizar as estrelas com base no nível de habilidade
  const renderSkillStars = (skillLevel:any) => {
  const fullStars = Math.floor(skillLevel);
  const halfStar = skillLevel - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }, (_, index) => (
        <BsStarFill key={index} className='text-red-500 inline' />
      ))}
      {halfStar && <BsStarHalf className='text-red-500 inline' />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <BsStar key={index} className='text-red-500 inline' />
      ))}
    </>
  );
};

export function SwiperHero() {
  const [selectedPicture, setSelectedPicture] = useState<PicsSkill | null>(null); // Estado para controlar qual imagem foi selecionada no modal
  const handleImageClick = (picture: PicsSkill) => {
    setSelectedPicture(picture);
  };

  return (
    <div className='hover:border-transparent'>
      <>
        {/*Carrosel*/}
        <SwiperImage onClick={handleImageClick} />
      </>
      {/* CV Download */}
      <CurriculoButton />
      {/* Modal */}
      <Transition.Root show={selectedPicture !== null} as={React.Fragment}>
        <Dialog as='div' className='fixed inset-0 overflow-y-auto z-50' onClose={() => setSelectedPicture(null)}>
          <div className='flex items-center justify-center min-h-screen p-4 text-center'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto'>
                {/* Renderize as informações da imagem selecionada aqui */}
                {selectedPicture && (
                  <>
                    <img src={selectedPicture.src} className='w-full h-auto rounded-lg shadow-2xl object-cover max-h-full' />
                    <h3 className='mt-4 text-xl font-semibold'>{selectedPicture.name}</h3>
                    <p className='mt-2 text-sm text-gray-600'>{selectedPicture.desc}</p>
                    <div className='mt-2 text-grey-800 text-xl'>
                      Nível de habilidade: {renderSkillStars(selectedPicture.skillLevel)}
                    </div>
                    {/* Outras informações da imagem, se houver */}
                  </>
                )}

                <button
                  className='mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg'
                  onClick={() => setSelectedPicture(null)}
                >
                  Fechar
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
