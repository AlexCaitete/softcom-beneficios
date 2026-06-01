  import { Award, Star, Trophy, Gift } from "lucide-react";
  import { employee as defaultEmployee } from "./ProfileHeader";
  import { useState, useEffect } from "react";
  import { toast } from "sonner";

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
    // Gerencia o histórico de prêmios, os pontos do funcionário e o catálogo vindo do Admin
    const [rewards, setRewards] = useState(myRewards);
    const [employeeData, setEmployeeData] = useState(defaultEmployee);
    const [catalogRewards, setCatalogRewards] = useState(availableRewards);

    useEffect(() => {
      // Função para carregar dados persistidos e sincronizados
      const loadData = () => {
        const savedRewards = localStorage.getItem("@softcom:myRewards");
        if (savedRewards) setRewards(JSON.parse(savedRewards));

        const savedEmployee = localStorage.getItem("@softcom:employee");
        if (savedEmployee) setEmployeeData(JSON.parse(savedEmployee));

        const savedCatalog = localStorage.getItem("@softcom:catalogRewards");
        if (savedCatalog) setCatalogRewards(JSON.parse(savedCatalog));
      };

      loadData();
      // Escuta mudanças de outras abas e eventos internos da mesma aba para atualizar pontos 
      // e recompensas em tempo real
      window.addEventListener("storage", loadData);
      window.addEventListener("local-storage-update", loadData);
      return () => {
        window.removeEventListener("storage", loadData);
        window.removeEventListener("local-storage-update", loadData);
      };
    }, []);

    // Lógica de resgate: valida saldo, subtrai pontos e registra no histórico de "Meus Prêmios"
    const handleRedeem = (reward: any) => {
      const cost = reward.cost || reward.points; // Aceita 'cost' (do Admin) ou 'points' (padrão antigo)
      if (employeeData.points < cost) {
        toast.error("Pontos insuficientes!");
        return;
      }

      const updatedEmployee = {
        ...employeeData,
        points: employeeData.points - cost, // Desconto do saldo
        rewards: (employeeData.rewards || 0) + 1,
      };

      const newReward = {
        title: reward.title,
        date: new Date().toLocaleDateString("pt-BR"),
        points: cost,
      };

      const updatedRewards = [newReward, ...rewards];

      localStorage.setItem("@softcom:employee", JSON.stringify(updatedEmployee));
      localStorage.setItem("@softcom:myRewards", JSON.stringify(updatedRewards));
      
      setEmployeeData(updatedEmployee);
      setRewards(updatedRewards);

      // Notifica outros componentes na mesma aba
      window.dispatchEvent(new Event("local-storage-update"));
      toast.success(`${reward.title} resgatado com sucesso!`);
    };

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
                {catalogRewards.map((reward: any) => {
                  const Icon = reward.icon || Gift;
                  const cost = reward.cost || reward.points;
                  const canAfford = employeeData.points >= cost;
                  return (
                    <div
                      key={reward.id}
                      className={`bg-white border-2 rounded-xl p-6 transition-all ${
                        canAfford
                          ? "border-[#FFD700] hover:shadow-lg"
                          : "border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            canAfford ? "bg-[#FFD700]" : "bg-gray-200"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${canAfford ? "text-black" : "text-gray-400"}`}
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
                            {cost}
                          </span>
                          <span className="text-sm text-gray-600">pts</span>
                        </div>
                        <button
                          onClick={() => handleRedeem(reward)}
                          disabled={!canAfford}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            canAfford
                              ? "bg-black text-white hover:bg-gray-800"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {canAfford
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
                  {rewards.map((reward, index) => (
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
                      {employeeData.rewards} prêmios
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