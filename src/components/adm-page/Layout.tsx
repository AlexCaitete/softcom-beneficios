import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Users, TrendingUp, Gift, LogOut, Menu, X } from 'lucide-react';

import logoSoffcom from "../../assets/logoBranca.png";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.includes('/admin');
  const isEmployeePage = location.pathname.includes('/employee');

  const handleLogout = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white border-b-4 border-[#FFD700] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <img src={logoSoffcom} alt="Soffcom" className="h-8 sm:h-10 object-contain" />
              <div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-gray-500">|</span>
                  <h1 className="text-base sm:text-xl font-bold truncate max-w-[150px] sm:max-w-none">
                    {isAdminPage ? 'Admin' : isEmployeePage ? 'Meu Painel' : 'Performance'}
                  </h1>
                </div>
                <p className="hidden sm:block text-sm text-gray-400">Gestão de Desempenho e Recompensas</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {isAdminPage && (
                <>
                  <button 
                    onClick={() => scrollToSection('employees-section')}
                    className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors"
                  >
                    <Users className="w-5 h-5" />
                    <span>Funcionários</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('metrics-section')}
                    className="flex items-center gap-2 px-4 py-2 hover:text-[#FFD700] transition-colors"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Métricas</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('rewards-section')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-colors"
                  >
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-black border-t border-gray-800 p-4 space-y-2">
            {isAdminPage && (
              <>
                <button 
                  onClick={() => scrollToSection('employees-section')}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Users className="w-5 h-5" />
                  <span>Funcionários</span>
                </button>
                <button 
                  onClick={() => scrollToSection('metrics-section')}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Métricas</span>
                </button>
                <button 
                  onClick={() => scrollToSection('rewards-section')}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-[#FFD700] text-black rounded-lg transition-colors"
                >
                  <Gift className="w-5 h-5" />
                  <span>Recompensas</span>
                </button>
              </>
            )}

            {isEmployeePage && (
              <>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-left">
                  <TrendingUp className="w-5 h-5" />
                  <span>Minhas Tarefas</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-left">
                  <Gift className="w-5 h-5" />
                  <span>Prêmios</span>
                </button>
              </>
            )}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </button>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}