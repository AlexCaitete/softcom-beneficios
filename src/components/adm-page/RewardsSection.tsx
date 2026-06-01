import { useState, useEffect } from "react";
import { Gift, Plus, X, Trash2 } from "lucide-react";
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

function RewardFormModal({
  onSave,
  onClose,
}: {
  onSave: (data: Omit<Reward, "id">) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    cost: 500,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        <div className="bg-black text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Nova Recompensa</h2>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Ex: Vale Restaurante"
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Descreva o prêmio..."
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors h-24 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Custo (Pontos)</label>
            <input
              type="number"
              required
              min={1}
              value={form.cost}
              onChange={(e) => setForm({ ...form, cost: Number(e.target.value) })}
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-colors"
          >
            Adicionar ao Catálogo
          </button>
        </form>
      </div>
    </div>
  );
}

export function RewardsSection() {

  const [rewards, setRewards] = useState<Reward[]>(() => {
    const saved = localStorage.getItem("@softcom:catalogRewards");
    return saved ? JSON.parse(saved) : initialRewards;
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const syncRewards = () => {
      const saved = localStorage.getItem("@softcom:catalogRewards");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (JSON.stringify(rewards) !== saved) {
          setRewards(parsed);
        }
      }
    };

    window.addEventListener("local-storage-update", syncRewards);
    window.addEventListener("storage", syncRewards); 
    return () => {
      window.removeEventListener("local-storage-update", syncRewards);
      window.removeEventListener("storage", syncRewards);
    };
  }, [rewards]);

  useEffect(() => {
    localStorage.setItem("@softcom:catalogRewards", JSON.stringify(rewards));
    window.dispatchEvent(new Event("local-storage-update"));
  }, [rewards]);

  const handleAddReward = (data: Omit<Reward, "id">) => {
    const newReward = { ...data, id: Date.now() };
    setRewards([...rewards, newReward]);
    setShowModal(false);
    toast.success("Recompensa adicionada ao catálogo!");
  };

  const handleDeleteReward = (id: number) => {
    setRewards(rewards.filter((r) => r.id !== id));
    toast.error("Recompensa removida");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Catálogo de Recompensas</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-5 h-5" /> Nova
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <button
                onClick={() => handleDeleteReward(reward.id)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                title="Remover recompensa"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <Gift className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="font-bold text-lg mb-2 pr-8">{reward.title}</h3>
              <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">{reward.description}</p>
              <div className="text-2xl font-bold text-[#FFD700]">
                {reward.cost} pts
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <RewardFormModal
          onSave={handleAddReward}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
