import { Link } from "react-router";

export default function Header(){
    return(
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
            <Link to="/" className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors">
              Portal do Cliente
            </Link>
            <Link to="/funcionario-page" className="px-3 py-1 bg-[#FFD700] hover:bg-[#FFC700] font-medium rounded-full transition-colors">
              Portal do Funcionário
            </Link>
          </div>
        </div>
      </header>
    );
}