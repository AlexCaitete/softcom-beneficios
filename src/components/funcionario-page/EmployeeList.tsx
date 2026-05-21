import { Trophy, Star, TrendingUp, CheckCircle } from "lucide-react";

export function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Gerente de Vendas",
      avatar: "AS",
      tasksCompleted: 18,
      totalTasks: 20,
      points: 2400,
      performance: 90,
      rewards: 5,
      color: "#FFD700",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Desenvolvedor",
      avatar: "CM",
      tasksCompleted: 15,
      totalTasks: 18,
      points: 2100,
      performance: 83,
      rewards: 4,
      color: "#FFA500",
    },
    {
      id: 3,
      name: "Beatriz Costa",
      role: "Designer",
      avatar: "BC",
      tasksCompleted: 22,
      totalTasks: 24,
      points: 2800,
      performance: 92,
      rewards: 6,
      color: "#FFD700",
    },
    {
      id: 4,
      name: "Diego Alves",
      role: "Marketing",
      avatar: "DA",
      tasksCompleted: 12,
      totalTasks: 16,
      points: 1650,
      performance: 75,
      rewards: 3,
      color: "#FFEC8B",
    },
    {
      id: 5,
      name: "Eduarda Lima",
      role: "Atendimento",
      avatar: "EL",
      tasksCompleted: 20,
      totalTasks: 22,
      points: 2500,
      performance: 91,
      rewards: 5,
      color: "#FFD700",
    },
    {
      id: 6,
      name: "Fernando Rocha",
      role: "Financeiro",
      avatar: "FR",
      tasksCompleted: 14,
      totalTasks: 20,
      points: 1800,
      performance: 70,
      rewards: 2,
      color: "#FFEC8B",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Desempenho dos Funcionários</h2>
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            + Adicionar Funcionário
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FFD700] transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-black"
                    style={{ backgroundColor: employee.color }}
                  >
                    {employee.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{employee.name}</h3>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                </div>
                {employee.performance >= 90 && (
                  <Trophy className="w-6 h-6 text-[#FFD700]" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Progresso de Tarefas
                    </span>
                    <span className="text-sm font-bold">
                      {employee.tasksCompleted}/{employee.totalTasks}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#FFD700] h-2.5 rounded-full transition-all"
                      style={{
                        width: `${(employee.tasksCompleted / employee.totalTasks) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                      <span className="text-xs text-gray-600">Performance</span>
                    </div>
                    <p className="text-xl font-bold">{employee.performance}%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-gray-600" />
                      <span className="text-xs text-gray-600">Pontos</span>
                    </div>
                    <p className="text-xl font-bold">{employee.points}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>{employee.rewards} prêmios conquistados</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
