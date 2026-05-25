export function Vouchers() {
  return (
    <div className="space-y-12">
      {/* Vouchers Ativos */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Meus Vouchers Ativos</h2>
            <p className="text-gray-500 mt-1">Vouchers que você já resgatou</p>
          </div>
          <span className="bg-[#10B981] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            2 ativos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - SmartFit */}
          <div className="bg-[#10B981] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-black/20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop" alt="Saúde" className="w-full h-full object-cover opacity-90" />
                </div>
                <div>
                  <span className="bg-white/20 px-2.5 py-1 rounded-md text-xs font-semibold mb-2 inline-block">Saúde</span>
                  <h3 className="font-bold text-xl leading-tight">Academia SmartFit</h3>
                  <p className="text-sm text-green-100 mt-1">Válido para qualquer plano anual</p>
                </div>
              </div>
              <span className="bg-white text-[#10B981] font-bold px-3 py-1.5 rounded-lg text-lg shadow-sm">50% OFF</span>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-xs text-green-100 mb-1">Código do Voucher</p>
                <p className="font-mono text-2xl font-bold tracking-wider">SOFT50FIT</p>
                <p className="text-xs text-green-100 mt-1">Expira em 30 dias</p>
              </div>
              <button className="bg-white text-[#10B981] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
                Copiar
              </button>
            </div>
          </div>

          {/* Card 2 - iFood */}
          <div className="bg-[#10B981] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-black/20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=100&auto=format&fit=crop" alt="Alimentação" className="w-full h-full object-cover opacity-90" />
                </div>
                <div>
                  <span className="bg-white/20 px-2.5 py-1 rounded-md text-xs font-semibold mb-2 inline-block">Alimentação</span>
                  <h3 className="font-bold text-xl leading-tight">iFood Delivery</h3>
                  <p className="text-sm text-green-100 mt-1">Em pedidos acima de R$ 50</p>
                </div>
              </div>
              <span className="bg-white text-[#10B981] font-bold px-3 py-1.5 rounded-lg text-lg shadow-sm">R$ 20 OFF</span>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-xs text-green-100 mb-1">Código do Voucher</p>
                <p className="font-mono text-2xl font-bold tracking-wider">SOFTFOOD30</p>
                <p className="text-xs text-green-100 mt-1">Expira em 15 dias</p>
              </div>
              <button className="bg-white text-[#10B981] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
                Copiar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vouchers Disponíveis */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Vouchers Disponíveis</h2>
            <p className="text-gray-500 mt-1">Clique para resgatar e ativar seu desconto</p>
          </div>
          <span className="bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            4 disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-800 rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&auto=format&fit=crop" alt="Cinema" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded">Novo</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-amber-400 text-gray-900 font-bold px-4 py-2 rounded-lg text-xl shadow-md">35% OFF</span>
            </div>
          </div>
          
          <div className="h-48 bg-gray-800 rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop" alt="Música" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded">Novo</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-amber-400 text-gray-900 font-bold px-4 py-2 rounded-lg text-xl shadow-md">40% OFF</span>
            </div>
          </div>
          
          <div className="h-48 bg-gray-800 rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop" alt="Eletrônicos" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded">Novo</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-amber-400 text-gray-900 font-bold px-4 py-2 rounded-lg text-xl shadow-md">3 meses grátis</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}