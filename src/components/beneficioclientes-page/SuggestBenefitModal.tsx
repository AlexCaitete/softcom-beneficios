import React, { useState } from "react";
import { X, Gift } from "lucide-react";
import { toast } from "sonner";

interface SuggestBenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuggestBenefitModal({
  isOpen,
  onClose,
}: SuggestBenefitModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    offerDescription: "",
    category: "Alimentação",
    couponCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingProposalsJson = localStorage.getItem(
      "@softcom:partnerProposals",
    );
    const existingProposals = existingProposalsJson
      ? JSON.parse(existingProposalsJson)
      : [];

    const newProposal = {
      id: crypto.randomUUID(),
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString(),
      submittedBy: "Usuário Logado",
    };

    localStorage.setItem(
      "@softcom:partnerProposals",
      JSON.stringify([...existingProposals, newProposal]),
    );

    window.dispatchEvent(new Event("local-storage-update"));

    toast.success("Sua sugestão foi enviada com sucesso e será analisada!");
    onClose();
    setFormData({
      companyName: "",
      offerDescription: "",
      category: "Alimentação",
      couponCode: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold text-gray-900">
              Sugerir Benefício
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Empresa/Parceiro
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Ex: Pizzaria do Bairro"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoria
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all bg-white"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Educação">Educação</option>
              <option value="Saúde e Bem-estar">Saúde e Bem-estar</option>
              <option value="Serviços">Serviços</option>
              <option value="Entretenimento">Entretenimento</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              O que é a oferta?
            </label>
            <textarea
              name="offerDescription"
              required
              value={formData.offerDescription}
              onChange={handleChange}
              placeholder="Ex: 20% de desconto em todas as pizzas às terças-feiras."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cupom ou Voucher (Opcional)
            </label>
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleChange}
              placeholder="Ex: SOFTCOM20"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all uppercase"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold transition-colors"
            >
              Enviar Sugestão
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
