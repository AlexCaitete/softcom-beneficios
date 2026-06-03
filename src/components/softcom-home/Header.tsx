import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Softcom"
            className="h-10 object-contain"
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-base text-center">
          <Link
            to="/meus-beneficios"
            className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors"
          >
            Portal do Cliente
          </Link>

          <Link
            to="/meu-perfil"
            className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors"
          >
            Portal do Funcionário
          </Link>

          <Link
            to="/admin"
            className="px-3 py-1 bg-gray-900 text-white hover:bg-gray-800 font-medium rounded-full transition-colors"
          >
            Portal do Administrador
          </Link>
        </div>
      </div>
    </header>
  );
}
