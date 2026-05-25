import { Link } from "react-router-dom"; 

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Softcom"
            className="h-10 object-contain"
          />
        </Link>
        <div className="flex gap-3">
          {/* Agora Portal do Cliente leva para Meus Benefícios */}
          <Link
            to="/meus-beneficios"
            className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors"
          >
            Portal do Cliente
          </Link>

          {/* Agora Portal do Funcionário leva para Meu Perfil/Tarefas */}
          <Link
            to="/meu-perfil"
            className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors"
          >
            Portal do Funcionário
          </Link>
        </div>
      </div>
    </header>
  );
}
