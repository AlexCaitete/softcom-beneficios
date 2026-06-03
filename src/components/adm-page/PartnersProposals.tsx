import {
  Package,
  Store,
  Calendar,
  TrendingUp,
  Check,
  X,
  Eye,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-6">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <h3 className="text-xl font-bold mb-3">Confirmar recusa</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}

interface Proposal {
  id: number | string;
  partnerName?: string;
  companyName?: string;
  partnerLogo?: string;
  category: string;
  discountTitle?: string;
  discountValue?: string;
  description?: string;
  offerDescription?: string;
  couponCode?: string;
  validUntil?: string;
  minPoints?: number;
  status:
    | "pendente"
    | "aprovado"
    | "recusado"
    | "pending"
    | "accepted"
    | "rejected";
  receivedDate?: string;
  submittedAt?: string;
  submittedBy?: string;
}

const initialProposals: Proposal[] = [
  {
    id: 1,
    partnerName: "Tech Store",
    partnerLogo: "TS",
    category: "Tecnologia",
    discountTitle: "20% de desconto em notebooks",
    discountValue: "20%",
    description:
      "Desconto válido para toda linha de notebooks profissionais. Parceria exclusiva para funcionários de alto desempenho.",
    validUntil: "2026-06-30",
    minPoints: 1500,
    status: "pendente",
    receivedDate: "2026-05-15",
  },
  {
    id: 2,
    partnerName: "Academia Fitness Pro",
    partnerLogo: "AF",
    category: "Saúde & Bem-estar",
    discountTitle: "3 meses grátis na academia",
    discountValue: "R$ 300",
    description:
      "Plano premium com acesso completo a todas as aulas e equipamentos. Inclui avaliação física gratuita.",
    validUntil: "2026-07-15",
    minPoints: 2000,
    status: "pendente",
    receivedDate: "2026-05-14",
  },
  {
    id: 3,
    partnerName: "Livraria Cultural",
    partnerLogo: "LC",
    category: "Educação",
    discountTitle: "15% em cursos online",
    discountValue: "15%",
    description:
      "Desconto aplicável em toda plataforma de cursos profissionalizantes e certificações.",
    validUntil: "2026-08-31",
    minPoints: 1000,
    status: "aprovado",
    receivedDate: "2026-05-10",
  },
  {
    id: 4,
    partnerName: "Restaurante Gourmet",
    partnerLogo: "RG",
    category: "Gastronomia",
    discountTitle: "Jantar para 2 pessoas",
    discountValue: "R$ 250",
    description:
      "Voucher para jantar completo no restaurante premiado. Inclui entrada, prato principal e sobremesa.",
    validUntil: "2026-06-15",
    minPoints: 1800,
    status: "pendente",
    receivedDate: "2026-05-16",
  },
  {
    id: 5,
    partnerName: "Viagens & Turismo",
    partnerLogo: "VT",
    category: "Viagens",
    discountTitle: "30% em pacotes de viagem",
    discountValue: "30%",
    description:
      "Desconto em pacotes nacionais e internacionais. Válido para reservas até dezembro.",
    validUntil: "2026-12-31",
    minPoints: 3000,
    status: "pendente",
    receivedDate: "2026-05-17",
  },
  {
    id: 6,
    partnerName: "AutoParts Brasil",
    partnerLogo: "AB",
    category: "Automotivo",
    discountTitle: "25% em manutenção automotiva",
    discountValue: "25%",
    description:
      "Desconto em serviços de manutenção preventiva e corretiva. Peças originais garantidas.",
    validUntil: "2026-07-30",
    minPoints: 1200,
    status: "recusado",
    receivedDate: "2026-05-12",
  },
];

export function PartnersProposals() {
  const [proposals, setProposals] = useState<Proposal[]>(() => {
    const saved = localStorage.getItem("@softcom:partnerProposals");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return initialProposals;
  });

  useEffect(() => {
    localStorage.setItem(
      "@softcom:partnerProposals",
      JSON.stringify(proposals),
    );
  }, [proposals]);

  useEffect(() => {
    const handleStorageUpdate = () => {
      const saved = localStorage.getItem("@softcom:partnerProposals");
      if (saved) {
        setProposals(JSON.parse(saved));
      }
    };
    window.addEventListener("local-storage-update", handleStorageUpdate);
    return () =>
      window.removeEventListener("local-storage-update", handleStorageUpdate);
  }, []);

  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null,
  );
  const [showModal, setShowModal] = useState(false);
  const [rejectingId, setRejectingId] = useState<number | string | null>(null);

  const handleApprove = (id: number | string) => {
    const proposal = proposals.find((p) => p.id === id);

    if (proposal) {
      setProposals(
        proposals.map((p) => (p.id === id ? { ...p, status: "aprovado" } : p)),
      );

      const newReward = {
        id: Date.now(),
        title:
          proposal.discountTitle ||
          proposal.offerDescription ||
          "Novo Benefício",
        cost: proposal.minPoints || 0,
        description: proposal.description || proposal.offerDescription || "",
      };

      const savedRewards = localStorage.getItem("@softcom:catalogRewards");
      const currentRewards = savedRewards ? JSON.parse(savedRewards) : [];
      localStorage.setItem(
        "@softcom:catalogRewards",
        JSON.stringify([...currentRewards, newReward]),
      );

      window.dispatchEvent(new Event("local-storage-update"));
      toast.success("Proposta aprovada e adicionada ao catálogo!");
    }
    setShowModal(false);
  };

  const handleReject = (id: number | string) => {
    setRejectingId(id);
  };

  const confirmReject = () => {
    if (rejectingId !== null) {
      setProposals(
        proposals.map((p) =>
          p.id === rejectingId ? { ...p, status: "recusado" } : p,
        ),
      );
      setShowModal(false);
      setRejectingId(null);
    }
  };

  const handleViewDetails = (proposal: Proposal) => {
    setSelectedProposal(proposal);
    setShowModal(true);
  };

  const pendingCount = proposals.filter(
    (p) => p.status === "pendente" || p.status === "pending",
  ).length;
  const approvedCount = proposals.filter(
    (p) => p.status === "aprovado" || p.status === "accepted",
  ).length;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "aprovado":
      case "accepted":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          label: "Aprovado",
        };
      case "recusado":
      case "rejected":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          label: "Recusado",
        };
      default:
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          label: "Pendente",
        };
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Propostas de Parceiros</h2>
            <p className="text-gray-600">
              Gerencie ofertas de descontos para seus funcionários
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white border-2 border-yellow-500 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">Aguardando aprovação</p>
              <p className="text-2xl font-bold text-yellow-600">
                {pendingCount}
              </p>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">Aprovadas</p>
              <p className="text-2xl font-bold text-green-600">
                {approvedCount}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposals.map((proposal) => {
            const statusStyle = getStatusStyle(proposal.status);

            return (
              <div
                key={proposal.id}
                className={`bg-white border-2 rounded-xl p-6 transition-all hover:shadow-lg ${
                  proposal.status === "pendente" ||
                  proposal.status === "pending"
                    ? "border-[#FFD700]"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center font-bold text-sm">
                      {proposal.partnerLogo ||
                        (proposal.companyName
                          ? proposal.companyName.substring(0, 2).toUpperCase()
                          : "PR")}
                    </div>
                    <div>
                      <h3 className="font-bold">
                        {proposal.partnerName || proposal.companyName}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {proposal.category}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 ${statusStyle.bg} ${statusStyle.text} rounded-full text-xs font-semibold`}
                  >
                    {statusStyle.label}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-lg mb-2">
                    {proposal.discountTitle || proposal.offerDescription}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {proposal.description || proposal.offerDescription}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Valor:</span>
                    <span className="font-bold text-[#FFD700]">
                      {proposal.discountValue ||
                        (proposal.couponCode
                          ? `Cupom: ${proposal.couponCode}`
                          : "Variável")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Mínimo:</span>
                    <span className="font-bold">
                      {proposal.minPoints || 0} pontos
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {proposal.validUntil ? "Válido até:" : "Enviado por:"}
                    </span>
                    <span className="font-bold">
                      {proposal.validUntil
                        ? new Date(proposal.validUntil).toLocaleDateString(
                            "pt-BR",
                          )
                        : proposal.submittedBy}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  {proposal.status === "pendente" ||
                  proposal.status === "pending" ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewDetails(proposal)}
                        className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Ver Detalhes
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleViewDetails(proposal)}
                      className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold"
                    >
                      Ver Detalhes
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {rejectingId !== null && (
        <ConfirmModal
          message="Tem certeza que deseja recusar esta proposta? O parceiro será notificado."
          onConfirm={confirmReject}
          onCancel={() => setRejectingId(null)}
        />
      )}

      {showModal && selectedProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-black text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center font-bold text-xl text-black">
                    {selectedProposal.partnerLogo ||
                      (selectedProposal.companyName
                        ? selectedProposal.companyName
                            .substring(0, 2)
                            .toUpperCase()
                        : "PR")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedProposal.partnerName ||
                        selectedProposal.companyName}
                    </h3>
                    <p className="text-gray-300">{selectedProposal.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-3">
                  {selectedProposal.discountTitle ||
                    selectedProposal.offerDescription}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProposal.description ||
                    selectedProposal.offerDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Valor do Desconto
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#FFD700]">
                    {selectedProposal.discountValue ||
                      (selectedProposal.couponCode
                        ? `Cupom: ${selectedProposal.couponCode}`
                        : "Variável")}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Pontos Mínimos
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {selectedProposal.minPoints || 0}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Válido até</span>
                  </div>
                  <p className="text-lg font-bold">
                    {selectedProposal.validUntil
                      ? new Date(
                          selectedProposal.validUntil,
                        ).toLocaleDateString("pt-BR")
                      : "Indeterminado"}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Recebido em</span>
                  </div>
                  <p className="text-lg font-bold">
                    {new Date(
                      selectedProposal.receivedDate ||
                        selectedProposal.submittedAt ||
                        new Date(),
                    ).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>

              {(selectedProposal.status === "pendente" ||
                selectedProposal.status === "pending") && (
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleReject(selectedProposal.id)}
                    className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Recusar Proposta
                  </button>
                  <button
                    onClick={() => handleApprove(selectedProposal.id)}
                    className="flex-1 px-6 py-3 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Aprovar Proposta
                  </button>
                </div>
              )}

              {selectedProposal.status !== "pendente" &&
                selectedProposal.status !== "pending" && (
                  <div
                    className={`p-4 rounded-lg ${getStatusStyle(selectedProposal.status).bg} ${getStatusStyle(selectedProposal.status).text} text-center font-semibold`}
                  >
                    Proposta {getStatusStyle(selectedProposal.status).label}
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
