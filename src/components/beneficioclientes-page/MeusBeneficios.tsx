export function MeusBeneficios() {
  return (
    <div className="space-y-12">

      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Descontos em Destaque</h2>
            <p className="text-gray-500 mt-1">Os melhores benefícios para você</p>
          </div>
          <span className="bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
            4 ofertas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white border border-amber-400 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" alt="Academia" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 shadow-lg">
                  50%
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">Saúde & Bem-estar</span>
              <h3 className="font-bold text-lg text-gray-800 leading-tight">Academia SmartFit</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">Desconto em qualquer plano anual</p>
              <button className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2.5 rounded-lg transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>

          <div className="bg-white border border-amber-400 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=400&auto=format&fit=crop" alt="Farmácia" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 shadow-lg">
                  40%
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">Saúde</span>
              <h3 className="font-bold text-lg text-gray-800 leading-tight">Farmácias Pague Menos</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">Medicamentos e produtos de higiene</p>
              <button className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2.5 rounded-lg transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>

          <div className="bg-white border border-amber-400 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&auto=format&fit=crop" alt="Cinema" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 shadow-lg">
                  35%
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">Entretenimento</span>
              <h3 className="font-bold text-lg text-gray-800 leading-tight">Cinemark</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">Ingressos de cinema</p>
              <button className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2.5 rounded-lg transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>

          <div className="bg-white border border-amber-400 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" alt="Alimentação" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 shadow-lg">
                  30%
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">Alimentação</span>
              <h3 className="font-bold text-lg text-gray-800 leading-tight">Aiqfome</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">Pedidos acima de R$ 30</p>
              <button className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2.5 rounded-lg transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Mais Benefícios</h2>
          <p className="text-gray-500 mt-1">Explore outras vantagens disponíveis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.745 3.808-.87 7.076-.496 9.715 1.115.293.18.386.563.207.854zm1.214-2.695c-.227.368-.7.485-1.07.257-2.685-1.646-6.78-2.13-9.965-1.166-.413.127-.85-.106-.976-.52-.126-.414.106-.85.52-.977 3.633-1.103 8.16-.565 11.23 1.32.37.228.487.702.26 1.086zm.106-2.836c-3.23-1.92-8.54-2.096-11.6-1.16-.496.15-1.015-.13-1.166-.626-.15-.495.13-1.014.625-1.165 3.52-1.078 9.38-.88 13.11 1.338.445.264.59.838.327 1.282-.265.443-.838.59-1.282.326z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Entretenimento</p>
                <h4 className="font-bold text-gray-800">Spotify Premium</h4>
                <p className="text-xs text-gray-500">Plano individual ou família</p>
              </div>
            </div>
            <span className="font-bold text-xl text-amber-500">20%</span>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Transporte</p>
                <h4 className="font-bold text-gray-800">Uber</h4>
                <p className="text-xs text-gray-500">Corridas até R$ 10 de desconto</p>
              </div>
            </div>
            <span className="font-bold text-xl text-amber-500">15%</span>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Educação</p>
                <h4 className="font-bold text-gray-800">Livraria Cultura</h4>
                <p className="text-xs text-gray-500">Livros e material escolar</p>
              </div>
            </div>
            <span className="font-bold text-xl text-amber-500">25%</span>
          </div>
        </div>
      </section>
    </div>
  );
}