import { useState, useEffect } from "react";
import { Ticket, Plus, X, Trash2, Calendar, Hash } from "lucide-react";
import { toast } from "sonner";

interface Voucher {
  id: number;
  category: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  expiration: string;
}

const initialVouchers: Voucher[] = [
  {
    id: 1,
    category: "Saúde",
    title: "Academia SmartFit",
    description: "Válido para qualquer plano anual",
    discount: "50% OFF",
    code: "SOFT50FIT",
    expiration: "30 dias",
  },
  {
    id: 2,
    category: "Alimentação",
    title: "Aiqfome Delivery",
    description: "Em pedidos acima de R$ 50",
    discount: "R$ 20 OFF",
    code: "SOFTFOOD30",
    expiration: "15 dias",
  },
  {
    id: 3,
    category: "Entretenimento",
    title: "Cinema Desconto",
    description: "Válido para ingressos 2D e 3D em toda rede Cinemark",
    discount: "35% OFF",
    code: "CINE35SOFT",
    expiration: "45 dias",
  },
  {
    id: 4,
    category: "Música",
    title: "Streaming de Música",
    description: "Desconto exclusivo para assinaturas Premium",
    discount: "40% OFF",
    code: "BEATSOFT40",
    expiration: "12 meses",
  },
  {
    id: 5,
    category: "Tecnologia",
    title: "Eletrônicos Desconto",
    description: "Desconto em smartphones e notebooks selecionados",
    discount: "3 meses grátis",
    code: "TECHSOFTFREE",
    expiration: "60 dias",
  },
];

function VoucherFormModal({
  onSave,
  onClose,
}: {
  onSave: (data: Omit<Voucher, "id">) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    discount: "",
    code: "",
    expiration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        <div className="bg-black text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Novo Voucher</h2>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Área do Comércio</label>
            <input
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="Ex: Saúde, Alimentação..."
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Ex: SmartFit Anual"
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Ex: Em pedidos acima de R$ 50..."
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors h-20 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Desconto</label>
              <input
                required
                value={form.discount}
                onChange={(e) => setForm({ ...form, discount: e.target.value })}
                placeholder="Ex: 50% OFF"
                className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Código</label>
              <input
                required
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                placeholder="Ex: SOFT50FIT"
                className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tempo de Expiração</label>
            <input
              required
              value={form.expiration}
              onChange={(e) => setForm({ ...form, expiration: e.target.value })}
              placeholder="Ex: 30 dias"
              className="w-full border-2 p-2 rounded-lg focus:border-black outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#10B981] text-white rounded-lg font-bold hover:bg-[#059669] transition-colors"
          >
            Adicionar ao Catálogo
          </button>
        </form>
      </div>
    </div>
  );
}

export function VouchersSection() {
  const [vouchers, setVouchers] = useState<Voucher[]>(() => {
    const saved = localStorage.getItem("@softcom:catalogVouchers");
    return saved ? JSON.parse(saved) : initialVouchers;
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("@softcom:catalogVouchers", JSON.stringify(vouchers));
    window.dispatchEvent(new Event("local-storage-update"));
  }, [vouchers]);

  const handleAddVoucher = (data: Omit<Voucher, "id">) => {
    const newVoucher = { ...data, id: Date.now() };
    setVouchers([...vouchers, newVoucher]);
    setShowModal(false);
    toast.success("Voucher adicionado ao catálogo!");
  };

  const handleDeleteVoucher = (id: number) => {
    setVouchers(vouchers.filter((v) => v.id !== id));
    toast.error("Voucher removido");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Catálogo de Vouchers</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-5 h-5" /> Novo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <button
                onClick={() => handleDeleteVoucher(voucher.id)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                title="Remover voucher"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Ticket className="w-8 h-8 text-[#10B981]" />
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {voucher.category}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-2 pr-8">{voucher.title}</h3>
              <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">
                {voucher.description}
              </p>

              <div className="text-2xl font-bold text-[#10B981] mb-6">
                {voucher.discount}
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Hash className="w-3 h-3" />
                  <span className="font-mono font-bold text-gray-700">{voucher.code}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Expira em: {voucher.expiration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <VoucherFormModal
          onSave={handleAddVoucher}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}