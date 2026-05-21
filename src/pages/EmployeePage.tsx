import {
  Target,
  TrendingUp,
  Award,
  Star,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trophy,
  Gift,
} from "lucide-react";

export function EmployeePage() {
  // Dados simulados do funcionário logado
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

  const myTasks = [
    {
      id: 1,
      title: "Fechar 10 vendas no mês",
      progress: 80,
      current: 8,
      goal: 10,
      status: "em-andamento",
      deadline: "2026-05-31",
      points: 500,
      prize: "Bônus R$ 500",
    },
    {
      id: 2,
      title: "Treinar 3 novos colaboradores",
      progress: 100,
      current: 3,
      goal: 3,
      status: "concluida",
      deadline: "2026-05-15",
      points: 400,
      prize: "Dia de folga extra",
    },
    {
      id: 3,
      title: "Aumentar ticket médio em 20%",
      progress: 65,
      current: 13,
      goal: 20,
      status: "em-andamento",
      deadline: "2026-05-28",
      points: 600,
      prize: "Vale presente R$ 300",
    },
  ];

  const myRewards = [
    {
      title: "Bônus R$ 500",
      date: "08/05/2026",
      points: 500,
    },
    {
      title: "Vale Presente R$ 200",
      date: "22/04/2026",
      points: 400,
    },
    {
      title: "Dia de Folga Extra",
      date: "10/04/2026",
      points: 350,
    },
  ];

  const availableRewards = [
    {
      id: 1,
      title: "Bônus em Dinheiro",
      description: "R$ 500 em dinheiro",
      points: 2000,
      icon: Gift,
      canRedeem: true,
    },
    {
      id: 2,
      title: "Dia de Folga Extra",
      description: "1 dia adicional de descanso",
      points: 1500,
      icon: Star,
      canRedeem: true,
    },
    {
      id: 3,
      title: "Upgrade de Equipamento",
      description: "Novo notebook ou equipamento",
      points: 3000,
      icon: Award,
      canRedeem: false,
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "concluida":
        return {
          bg: "bg-green-50",
          border: "border-green-500",
          text: "text-green-700",
          icon: CheckCircle2,
        };
      case "atrasada":
        return {
          bg: "bg-red-50",
          border: "border-red-500",
          text: "text-red-700",
          icon: AlertCircle,
        };
      default:
        return {
          bg: "bg-yellow-50",
          border: "border-[#FFD700]",
          text: "text-yellow-700",
          icon: Clock,
        };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "concluida":
        return "Concluída";
      case "atrasada":
        return "Atrasada";
      default:
        return "Em Andamento";
    }
  };

  const pointsToNextLevel = employee.nextLevelPoints - employee.points;
  const progressToNextLevel =
    (employee.points / employee.nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 border-b-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center text-3xl font-bold text-black">
                {employee.avatar}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{employee.name}</h1>
                <p className="text-xl text-gray-300 mb-4">{employee.role}</p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-[#FFD700] text-black rounded-lg font-bold">
                    Nível {employee.level}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#FFD700]" />
                    <span className="font-bold text-lg">
                      {employee.points} pontos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 min-w-[300px]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm">Progresso para próximo nível</span>
                <span className="text-sm font-bold">
                  {pointsToNextLevel} pontos faltam
                </span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-3 mb-2">
                <div
                  className="bg-[#FFD700] h-3 rounded-full transition-all"
                  style={{ width: `${progressToNextLevel}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400">
                Meta: {employee.nextLevelPoints} pontos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
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

      {/* My Tasks */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Minhas Tarefas</h2>

          <div className="space-y-4">
            {myTasks.map((task) => {
              const statusStyles = getStatusStyles(task.status);
              const StatusIcon = statusStyles.icon;

              return (
                <div
                  key={task.id}
                  className={`bg-white border-2 ${statusStyles.border} rounded-xl p-6 hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 ${statusStyles.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <StatusIcon
                            className={`w-5 h-5 ${statusStyles.text}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">
                            {task.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>
                              Prazo:{" "}
                              {new Date(task.deadline).toLocaleDateString(
                                "pt-BR",
                              )}
                            </span>
                            <span>•</span>
                            <span className="text-[#FFD700] font-semibold">
                              Prêmio: {task.prize}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 ${statusStyles.bg} ${statusStyles.text} rounded-full text-sm font-semibold`}
                        >
                          {getStatusLabel(task.status)}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">
                            Progresso: {task.current}/{task.goal}
                          </span>
                          <span className="text-sm font-bold">
                            {task.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              task.status === "concluida"
                                ? "bg-green-500"
                                : task.status === "atrasada"
                                  ? "bg-red-500"
                                  : "bg-[#FFD700]"
                            }`}
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-black text-white rounded-lg font-semibold text-sm">
                          +{task.points} pontos
                        </span>
                        {task.status !== "concluida" && (
                          <button className="px-4 py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-colors font-semibold text-sm">
                            Atualizar Progresso
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Available Rewards */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Recompensas Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableRewards.map((reward) => {
                  const Icon = reward.icon;
                  return (
                    <div
                      key={reward.id}
                      className={`bg-white border-2 rounded-xl p-6 transition-all ${
                        reward.canRedeem
                          ? "border-[#FFD700] hover:shadow-lg"
                          : "border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            reward.canRedeem ? "bg-[#FFD700]" : "bg-gray-200"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${reward.canRedeem ? "text-black" : "text-gray-400"}`}
                          />
                        </div>
                      </div>

                      <h4 className="font-bold text-lg mb-2">{reward.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {reward.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-[#FFD700]" />
                          <span className="font-bold text-lg">
                            {reward.points}
                          </span>
                          <span className="text-sm text-gray-600">pts</span>
                        </div>
                        <button
                          disabled={!reward.canRedeem}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            reward.canRedeem
                              ? "bg-black text-white hover:bg-gray-800"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {reward.canRedeem
                            ? "Resgatar"
                            : "Pontos Insuficientes"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* My Rewards History */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Meus Prêmios</h2>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="space-y-4">
                  {myRewards.map((reward, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-semibold mb-1">{reward.title}</p>
                          <p className="text-sm text-gray-600">{reward.date}</p>
                        </div>
                        <Trophy className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#FFD700]" />
                        <span>{reward.points} pontos</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-[#FFD700] bg-opacity-20 rounded-lg p-4 text-center">
                    <Award className="w-8 h-8 text-black mx-auto mb-2" />
                    <p className="font-bold text-lg mb-1">
                      {employee.rewards} prêmios
                    </p>
                    <p className="text-sm text-gray-600">
                      conquistados no total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
