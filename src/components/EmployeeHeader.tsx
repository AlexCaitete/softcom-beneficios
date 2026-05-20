import { Award, Users, TrendingUp, Gift } from "lucide-react";

export function EmployeeHeader() {
  return (
    <header className="bg-black text-white border-b-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center">
              <Award className="w-7 h-7 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Nome do&nbsp;&nbsp;funcionario
              </h1>
              <p className="text-sm text-gray-400">
                Gestão de Desempenho e Recompensas
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors">
              <Users className="w-5 h-5" />
              <span>Funcionários</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>Métricas</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-colors">
              <Gift className="w-5 h-5" />
              <span>Recompensas</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
