import { NavLink } from "react-router-dom";

export function MenuNav() {
    return (
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
    )
}