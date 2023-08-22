
import { FaUserCircle } from 'react-icons/fa';

import { profilePic } from "../../data/data";
import { useState } from 'react';

export function Landing() {
    
    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <div className="card bg-white border border-gray-300 shadow-md rounded-md p-6 w-64">
        <div className="flex items-center justify-center mb-4">
        <FaUserCircle className="text-6xl text-gray-400" />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-black">Seu Nome</h2>
        <p className="text-gray-500">Título do Cargo</p>
      </div>
      {showInfo && (
        <div className="bg-black text-white p-2 rounded opacity-100">
          <div
              className={'bg-black text-white p-2 rounded }'}
            >
              <img
                src={profilePic}
                alt="Call Me If You Get Lost Album Cover"
                className="w-96 h-96 rounded-full shadow-lg"
            />
            </div>
        </div>
      )}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="bg-gray-700 text-white py-2 px-4 rounded mt-4"
      >
        Mostrar/Esconder Informações
      </button>
      </div>
    );
}
