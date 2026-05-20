import { Target, TrendingUp, Award, Users } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      icon: Users,
      label: 'Total de Funcionários',
      value: '24',
      change: '+3 este mês',
      positive: true
    },
    {
      icon: Target,
      label: 'Metas Concluídas',
      value: '156',
      change: '+28% vs mês anterior',
      positive: true
    },
    {
      icon: TrendingUp,
      label: 'Performance Média',
      value: '87%',
      change: '+12% este trimestre',
      positive: true
    },
    {
      icon: Award,
      label: 'Prêmios Entregues',
      value: '42',
      change: '18 este mês',
      positive: true
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Dashboard Geral</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FFD700] transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#FFD700] bg-opacity-20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
