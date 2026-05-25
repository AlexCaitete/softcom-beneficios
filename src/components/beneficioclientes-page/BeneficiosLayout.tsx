import { Outlet, NavLink } from "react-router-dom";

export function BeneficiosLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho Topo (Header) */}
      <header className="bg-[#171E2E] text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-[#171E2E] font-bold text-2xl">
              S
            </div>
            <div>
              <h1 className="font-bold text-xl">Softcom Benefícios</h1>
              <p className="text-sm text-gray-300">Aproveite suas vantagens</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="font-bold text-sm">João Silva</p>
              <p className="text-xs text-gray-400">Matrícula: 111</p>
            </div>
            <button className="bg-[#4B3E1F] text-amber-400 px-6 py-2 rounded-lg font-semibold hover:bg-[#5a4a25] transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Menu de Navegação (Tabs do Figma) */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex gap-8 px-4 overflow-x-auto">
          <NavLink
            to="/meus-beneficios"
            className={({ isActive }) =>
              `px-8 py-5 font-semibold text-sm transition-colors border-b-2 ${
                isActive
                  ? "text-amber-400 border-amber-400"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`
            }
          >
            Meus Benefícios
          </NavLink>

          <NavLink
            to="/vouchers"
            className={({ isActive }) =>
              `px-8 py-5 font-semibold text-sm transition-colors border-b-2 ${
                isActive
                  ? "text-amber-400 border-amber-400"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`
            }
          >
            Meus Vouchers
          </NavLink>

          <NavLink
            to="/indicacoes"
            className={({ isActive }) =>
              `px-8 py-5 font-semibold text-sm transition-colors border-b-2 ${
                isActive
                  ? "text-amber-400 border-amber-400"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`
            }
          >
            Indicar e Ganhar
          </NavLink>
        </div>
      </nav>

      {/* Área onde as páginas (Meus Benefícios, Vouchers, Indicações) vão renderizar */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}
