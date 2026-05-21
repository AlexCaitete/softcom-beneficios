import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Users, TrendingUp, Gift, LogOut } from 'lucide-react';
import logoSoffcom from "../../assets/logoBranca.png";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.includes('/admin');
  const isEmployeePage = location.pathname.includes('/employee');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white border-b-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoSoffcom} alt="Soffcom" className="h-10 object-contain" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">|</span>
                  <h1 className="text-xl font-bold">
                    {isAdminPage ? 'Painel Administrativo' : isEmployeePage ? 'Meu Painel' : 'Performance Hub'}
                  </h1>
                </div>
                <p className="text-sm text-gray-400">Gestão de Desempenho e Recompensas</p>
              </div>
            </div>

            <nav className="flex items-center gap-6">
              {isAdminPage && (
                <>
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
                </>
              )}

              {isEmployeePage && (
                <>
                  <button className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors">
                    <TrendingUp className="w-5 h-5" />
                    <span>Minhas Tarefas</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors">
                    <Gift className="w-5 h-5" />
                    <span>Prêmios</span>
                  </button>
                </>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}