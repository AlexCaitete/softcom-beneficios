import { useEffect, useState } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router';

interface User {
  nome: string;
  matricula: string;
}

export function DashboardLayout() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F2937] to-[#111827] text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#FBBF24] rounded-full flex items-center justify-center">
                <span className="text-[#1F2937] text-xl font-bold">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Softcom Benefícios</h1>
                <p className="text-yellow-100 text-sm">Aproveite suas vantagens</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="font-semibold text-lg">{user.nome}</p>
                <p className="text-yellow-100 text-sm">Matrícula: {user.matricula}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#FBBF24]/20 hover:bg-[#FBBF24]/30 text-[#FBBF24] px-4 py-2 rounded-lg transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `py-4 px-2 border-b-2 transition-colors ${
                  isActive
                    ? 'border-[#FBBF24] text-[#FBBF24] font-semibold'
                    : 'border-transparent text-gray-600 hover:text-[#FBBF24]'
                }`
              }
            >
              Meus Benefícios
            </NavLink>
            <NavLink
              to="/dashboard/vouchers"
              className={({ isActive }) =>
                `py-4 px-2 border-b-2 transition-colors ${
                  isActive
                    ? 'border-[#FBBF24] text-[#FBBF24] font-semibold'
                    : 'border-transparent text-gray-600 hover:text-[#FBBF24]'
                }`
              }
            >
              Meus Vouchers
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
