export default function Apresentacao() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="">
          <img
            src="/src/assets/woman-discount.png"
            alt="Mulher com celular"
            className="w-full max-w-md object-contain"
          />
        </div>
        <div>
          <h1 className="text-[2.2rem] text-gray-900 font-bold mb-6 ">
            Somos a tecnologia que{" "}
            <span className="bg-[#FFD700] p-[3px]">IMPULSIONA</span> o comércio!
          </h1>
          <p className="text-[0.96rem] text-gray-600 font-medium leading-relaxed">
            Bem-vindo à Softcom! É um prazer ter você conosco! Na Softcom,
            acreditamos que a tecnologia é uma ferramenta poderosa para
            transformar ideias em soluções inovadoras. Nosso compromisso é
            oferecer serviços de qualidade, sempre com foco em eficiência,
            inovação e excelência no atendimento. Aqui, você encontrará uma
            equipe dedicada, pronta para entender suas necessidades e entregar
            resultados que realmente fazem a diferença. Seja você um cliente,
            parceiro ou colaborador, saiba que sua presença é muito importante
            para nós. Conte com a Softcom para caminhar ao seu lado rumo ao
            sucesso! Seja muito bem-vindo!
          </p>
        </div>
      </div>
    </section>
  );
}
