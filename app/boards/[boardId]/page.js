export default function Board() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Projet Refonte Site Web</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          + Nouvelle Colonne
        </button>
      </header>

      <main className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-6 items-start h-full">
          
          <div className="bg-gray-200 rounded-lg w-80 shrink-0 max-h-full flex flex-col">
            <div className="p-3 flex items-center justify-between shrink-0">
              <h2 className="font-semibold text-gray-700">À faire</h2>
              <span className="text-sm text-gray-500 bg-gray-300 px-2 py-0.5 rounded-full">3</span>
            </div>
            
            <div className="p-3 flex-1 overflow-y-auto space-y-3 custom-scrollbar">
              
              {/* Carte */}
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">Urgent</span>
                </div>
                <h3 className="text-sm font-medium text-gray-800 mb-1">Mettre en place Quarkus</h3>
                <p className="text-xs text-gray-500 line-clamp-2">Configurer la base PostgreSQL et les entités Panache.</p>
              </div>

              {/* Carte */}
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors">
                <h3 className="text-sm font-medium text-gray-800 mb-1">Créer le layout Tailwind</h3>
              </div>

            </div>

            <div className="p-3 shrink-0">
              <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-300 p-2 rounded transition-colors">
                + Ajouter une carte
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg w-80 shrink-0 max-h-full flex flex-col">
            <div className="p-3 flex items-center justify-between shrink-0">
              <h2 className="font-semibold text-gray-700">En cours</h2>
              <span className="text-sm text-gray-500 bg-gray-300 px-2 py-0.5 rounded-full">1</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">Frontend</span>
                </div>
                <h3 className="text-sm font-medium text-gray-800 mb-1">Système de Login Next.js</h3>
              </div>
            </div>
            <div className="p-3 shrink-0">
              <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-300 p-2 rounded transition-colors">
                + Ajouter une carte
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg w-80 shrink-0 max-h-full flex flex-col">
            <div className="p-3 flex items-center justify-between shrink-0">
              <h2 className="font-semibold text-gray-700">Terminé</h2>
              <span className="text-sm text-gray-500 bg-gray-300 px-2 py-0.5 rounded-full">0</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
            </div>

            <div className="p-3 shrink-0">
              <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-300 p-2 rounded transition-colors">
                + Ajouter une carte
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}