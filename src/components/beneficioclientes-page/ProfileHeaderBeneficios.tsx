import {useNavigate } from "react-router-dom";


export function ProfileHeaderBeneficios() {
    const navigate = useNavigate();
    
      const handleLogout = () => {
        navigate('/'); // Assumindo que a rota para a página do funcionário é '/employee'
      };
      
    return (
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
            <button onClick={handleLogout} className="bg-[#4B3E1F] text-amber-400 px-6 py-2 rounded-lg font-semibold hover:bg-[#5a4a25] transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>
    )
}