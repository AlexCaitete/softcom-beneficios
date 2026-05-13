  const benefits = [
    {
      title: "Gestão Inteligente",
      description: "Sistema completo de gestão que otimiza processos e aumenta a produtividade do seu negócio.",
      audience: "clientes"
    },
    {
      title: "Suporte Especializado",
      description: "Equipe dedicada disponível para auxiliar em todas as etapas da jornada digital.",
      audience: "clientes"
    },
    {
      title: "Crescimento Profissional",
      description: "Ambiente colaborativo com oportunidades de desenvolvimento e capacitação constante.",
      audience: "colaboradores"
    },
    {
      title: "Inovação Contínua",
      description: "Acesso às tecnologias mais modernas e projetos desafiadores que impulsionam carreiras.",
      audience: "colaboradores"
    },
  ];

export default function Benefits() {
    return (
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-gray-900 text-center text-3xl font-bold mb-4">Quais os benefícios?</h2>
          <p className="text-center text-gray-600 mb-12">Para nossos clientes e colaboradores</p>
          <div className="text-gray-900 grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#FFD700] transition-colors">
                <div className="inline-block px-3 py-1 bg-[#FFD700] rounded-full text-sm mb-4">
                  {benefit.audience === "clientes" ? "Para Clientes" : "Para Colaboradores"}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}