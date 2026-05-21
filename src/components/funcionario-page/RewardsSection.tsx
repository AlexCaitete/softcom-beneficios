  import { Award, Star, Trophy, Gift } from "lucide-react";
  import { employee } from "./ProfileHeader";


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

export function RewardsSection() {
    return (
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
    )
}