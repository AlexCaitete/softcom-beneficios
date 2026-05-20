import { useState } from 'react';
import { Gift, Plus, X, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Reward {
  id: number;
  title: string;
  cost: number;
  description: string;
}

const initialRewards: Reward[] = [
  { id: 1, title: 'Dia de folga', cost: 1000, description: 'Um dia de descanso remunerado.' },
  { id: 2, title: 'Vale Presente R$ 100', cost: 500, description: 'Cartão para usar em lojas parceiras.' },
  { id: 3, title: 'Curso Online Premium', cost: 1500, description: 'Acesso a plataforma de cursos.' }
];

function RewardFormModal({ onSave, onClose }: { onSave: (data: any) => void; onClose: () => void }) {
  const [form, setForm] = useState({ title: '', cost: 0, description: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    onSave(form);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl">
        <div className="bg-black text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-xl font-bold">Nova Recompensa</h2>
          <button onClick={onClose}><X /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input required placeholder="Nome da recompensa" className="w-full border-2 p-2 rounded-lg" onChange={e => setForm({...form, title: e.target.value})} />
          <input type="number" required placeholder="Custo em pontos" className="w-full border-2 p-2 rounded-lg" onChange={e => setForm({...form, cost: Number(e.target.value)})} />
          <textarea required placeholder="Descrição" className="w-full border-2 p-2 rounded-lg" onChange={e => setForm({...form, description: e.target.value})} />
          <button disabled={isLoading} type="submit" className="w-full py-3 bg-[#FFD700] rounded-lg font-bold hover:bg-[#FFC700] transition-colors">
            {isLoading ? 'Salvando...' : 'Criar Recompensa'}
          </button>
        </form>
      </div>
    </div>
  );
}

export function RewardsSection() {
  const [rewards, setRewards] = useState<Reward[]>(initialRewards);
  const [showModal, setShowModal] = useState(false);

  const handleAddReward = (data: any) => {
    setRewards([...rewards, { id: Date.now(), ...data }]);
    setShowModal(false);
    toast.success('Recompensa adicionada com sucesso!');
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Catálogo de Recompensas</h2>
          <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center gap-2">
            <Plus className="w-5 h-5" /> Nova
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map(reward => (
            <div key={reward.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <Gift className="w-8 h-8 text-[#FFD700] mb-4" />
              <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
              <div className="text-2xl font-bold