import { Star, Target, TrendingUp, Trophy} from "lucide-react";

const employee = {
    name: "Ana Silva",
    role: "Gerente de Vendas",
    avatar: "AS",
    points: 2400,
    performance: 90,
    tasksCompleted: 18,
    totalTasks: 20,
    rewards: 5,
    level: "Ouro",
    nextLevelPoints: 3000,
};

export function StatsCards() {
    return (
        <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#FFD700] bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <span className="text-sm text-gray-600">Tarefas</span>
              </div>
              <p className="text-3xl font-bold">
                {employee.tasksCompleted}/{employee.totalTasks}
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Performance</span>
              </div>
              <p className="text-3xl font-bold">{employee.performance}%</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm text-gray-600">Prêmios</span>
              </div>
              <p className="text-3xl font-bold">{employee.rewards}</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#FFD700] bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-black" />
                </div>
                <span className="text-sm text-gray-600">Pontos</span>
              </div>
              <p className="text-3xl font-bold">{employee.points}</p>
            </div>
          </div>
        </div>
      </section>
    )
}