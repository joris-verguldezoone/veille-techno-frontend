"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CreateBoardModal from "./components/CreateBoardModal";

export default function BoardsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boards, setBoards] = useState([])

  // useEffect(()=>{
    
  // },[])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mes Tableaux</h1>
            <p className="text-gray-500 text-sm mt-1">Gérez vos projets et espaces de travail.</p>
          </div>
        </header>

        {/* Grille responsive : 1 colonne sur mobile, 3 sur tablette, 4 sur grand écran */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Carte spéciale : Créer un nouveau tableau */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center min-h-[160px] bg-transparent border-2 border-dashed border-gray-300 rounded-xl hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors text-gray-500 group"
          >
            <div className="bg-gray-200 group-hover:bg-blue-100 p-3 rounded-full mb-3 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-medium">Nouveau tableau</span>
          </button>

          {boards.map((board) => (
            <Link 
              key={board.id} 
              href={`/boards/${board.id}`}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 leading-tight">
                  {board.title}
                </h2>
              </div>
              <div className="mt-4 text-xs text-gray-400 font-medium">
                Actif : {board.lastActive}
              </div>
            </Link>
          ))}
        </main>
      </div>

      {isModalOpen && (
        <CreateBoardModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}