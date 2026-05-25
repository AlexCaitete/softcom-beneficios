import { useState } from "react";

interface Referral {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  status: "pendente" | "em_analise" | "aprovado" | "rejeitado";
  dataIndicacao: string;
  recompensa: number;
}

export function Referrals() {
  const [activeTab, setActiveTab] = useState<"indicar" | "acompanhar">(
    "indicar",
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
  });

  const [referrals, setReferrals] = useState<Referral[]>([
    {
      id: 1,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      telefone: "(11) 98765-4321",
      status: "aprovado",
      dataIndicacao: "2026-05-10",
      recompensa: 300,
    },
    {
      id: 2,
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      telefone: "(11) 91234-5678",
      status: "em_analise",
      dataIndicacao: "2026-05-18",
      recompensa: 0,
    },
    {
      id: 3,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 99876-5432",
      status: "pendente",
      dataIndicacao: "2026-05-20",
      recompensa: 0,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReferral: Referral = {
      id: referrals.length + 1,
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      status: "pendente",
      dataIndicacao: new Date().toISOString().split("T")[0],
      recompensa: 0,
    };

    setReferrals([newReferral, ...referrals]);
    setFormData({ nome: "", email: "", telefone: "", empresa: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getStatusBadge = (status: Referral["status"]) => {
    const styles = {
      pendente: "bg-gray-100 text-gray-700",
      em_analise: "bg-blue-100 text-blue-700",
      aprovado: "bg-green-100 text-green-700",
      rejeitado: "bg-red-100 text-red-700",
    };

    const labels = {
      pendente: "Pendente",
      em_analise: "Em Análise",
      aprovado: "Aprovado",
      rejeitado: "Rejeitado",
    };

    return (
      <span
        className={`${styles[status]} px-3 py-1 rounded-full text-xs font-semibold`}
      >
        {labels[status]}
      </span>
    );
  };

  const totalRecompensas = referrals
    .filter((r) => r.status === "aprovado")
    .reduce((sum, r) => sum + r.recompensa, 0);

  const totalIndicacoes = referrals.length;
  const totalAprovadas = referrals.filter(
    (r) => r.status === "aprovado",
  ).length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm mb-1">
                Total em Recompensas
              </p>
              <p className="text-4xl font-bold">R$ {totalRecompensas}</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total de Indicações</p>
              <p className="text-4xl font-bold text-gray-800">
                {totalIndicacoes}
              </p>
            </div>
            <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Aprovadas</p>
              <p className="text-4xl font-bold text-green-600">
                {totalAprovadas}
              </p>
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("indicar")}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
              activeTab === "indicar"
                ? "bg-amber-400 text-gray-800 border-b-2 border-amber-400"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Indicar Novo Cliente
          </button>
          <button
            onClick={() => setActiveTab("acompanhar")}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
              activeTab === "acompanhar"
                ? "bg-amber-400 text-gray-800 border-b-2 border-amber-400"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Acompanhar Indicações
          </button>
        </div>

        <div className="p-8">
          {activeTab === "indicar" ? (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Indique e Ganhe!
                </h2>
                <p className="text-gray-600">
                  Indique novos clientes e ganhe{" "}
                  <span className="font-bold text-amber-400">R$ 300</span> por
                  cada indicação aprovada.
                </p>
              </div>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-green-800 font-semibold">
                    Indicação enviada com sucesso!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                      placeholder="Digite o nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                      placeholder="email@exemplo.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Como funciona:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Preencha os dados do cliente indicado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>
                        Nossa equipe entrará em contato em até 48 horas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>Receba R$ 300 quando a indicação for aprovada</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 text-gray-800 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Enviar Indicação
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Minhas Indicações
                </h2>
                <p className="text-gray-600">
                  Acompanhe o status de todas as suas indicações
                </p>
              </div>

              <div className="space-y-4">
                {referrals.map((referral) => (
                  <div
                    key={referral.id}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-xl text-gray-800">
                            {referral.nome}
                          </h3>
                          {getStatusBadge(referral.status)}
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            {referral.email}
                          </p>
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            {referral.telefone}
                          </p>
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            Indicado em{" "}
                            {new Date(
                              referral.dataIndicacao,
                            ).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                      {referral.status === "aprovado" && (
                        <div className="bg-green-500 text-white rounded-lg px-6 py-3 text-center">
                          <p className="text-xs mb-1">Recompensa</p>
                          <p className="text-2xl font-bold">
                            R$ {referral.recompensa}
                          </p>
                        </div>
                      )}
                    </div>

                    {referral.status === "em_analise" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                        Nossa equipe está analisando esta indicação. Você será
                        notificado em breve!
                      </div>
                    )}

                    {referral.status === "pendente" && (
                      <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm text-gray-700">
                        Aguardando primeiro contato com o cliente indicado.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
