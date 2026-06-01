import { useState, useEffect } from "react";
import { Plus, X, Trash2, Edit2 } from "lucide-react";
import { toast } from "sonner";

interface Brand {
  name: string;
  logo: string;
}

const defaultBrands = [
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
];

export function BrandsManagement() {
  const [brands, setBrands] = useState<Brand[]>(() => {
    const saved = localStorage.getItem("@softcom:brands");
    return saved ? JSON.parse(saved) : defaultBrands;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", logo: "" });

  useEffect(() => {
    localStorage.setItem("@softcom:brands", JSON.stringify(brands));
    window.dispatchEvent(new Event("local-storage-update"));
  }, [brands]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const newBrands = [...brands];
      newBrands[editingIndex] = form;
      setBrands(newBrands);
      toast.success("Marca atualizada!");
    } else {
      setBrands([...brands, form]);
      toast.success("Nova marca adicionada!");
    }
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingIndex(null);
    setForm({ name: "", logo: "" });
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setForm(brands[index]);
    setShowModal(true);
  };

  const handleDelete = (index: number) => {
    setBrands(brands.filter((_, i) => i !== index));
    toast.error("Marca removida");
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Gerenciar Marcas Parceiras</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-5 h-5" /> Adicionar Marca
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-100 relative group flex flex-col items-center shadow-sm">
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(index)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <img src={brand.logo} alt={brand.name} className="h-12 object-contain mb-4" />
              <p className="font-bold text-gray-700">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70] p-6">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div className="bg-black text-white p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl font-bold">{editingIndex !== null ? "Editar Marca" : "Nova Marca"}</h2>
              <button onClick={closeModal}><X /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome da Marca</label>
                <input
                  required
                  className="w-full border-2 p-2 rounded-lg"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Ex: Spotify"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL do Logo (SVG ou PNG)</label>
                <input
                  required
                  className="w-full border-2 p-2 rounded-lg"
                  value={form.logo}
                  onChange={e => setForm({ ...form, logo: e.target.value })}
                  placeholder="https://link-da-imagem.com/logo.svg"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-400 mb-4 italic">Dica: Use links do Wikipedia Commons ou sites oficiais para logos em alta qualidade.</p>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-colors"
                >
                  {editingIndex !== null ? "Salvar Alterações" : "Adicionar à Home"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
