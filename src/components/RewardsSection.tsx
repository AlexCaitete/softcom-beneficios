import { useState } from "react";
import { Gift, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface Reward {
  id: number;
  title: string;
  cost: number;
  description: string;
}

const initialRewards: Reward[] = [
  {
    id: 1,
    title: "Dia de folga",
    cost: 1000,
    description: "Um dia de descanso remunerado.",
  },
  {
    id: 2,
    title: "Vale Presente R$ 100",
    cost: 500,
    description: "Cartão para usar em lojas parceiras.",
  },
  {
    id: 3,
    title: "Curso Online Premium",
    cost: 1500,
    description: "Acesso a plataforma de cursos.",
  },
];

export function RewardsSection() {
  const [rewards, setRewards] = useState<Reward[]>(initialRewards);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Catálogo de Recompensas</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Nova
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <Gift className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
              {/* Linha 75 corrigida abaixo */}
              <div className="text-2xl font-bold text-[#FFD700]">
                {reward.cost} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
