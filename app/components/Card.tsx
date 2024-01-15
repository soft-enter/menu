export function Card() {
  return (
    <div className="col-span-1 mx-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden m-3 h-56">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            Malecon
          </h1>
          <p className="mt-2 text-gray-500">
            Av. 27 de Febrero #429 esq. Núñez de Cáceres, Quisqueya, El Millón
            Santo Domingo
          </p>
          <div className="mt-4 space-x-2">
            <button className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-cyan-400 hover:bg-indigo-700">
              Llamar
            </button>
            <button className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
