import womanDiscountImg from "../../assets/woman-discount.png";

export default function Apresentacao() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={womanDiscountImg}
            alt="Mulher feliz com desconto"
            className="w-full h-auto object-contain z-10 relative drop-shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Somos a tecnologia que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
              IMPULSIONA
            </span>{" "}
            o comércio!
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bem-vindo ao portal da{" "}
            <span className="font-bold text-gray-900">Softcom</span>! Aqui, você
            encontra o melhor em tecnologia para gerenciar o seu negócio. Conte
            com a Softcom para caminhar ao seu lado rumo ao sucesso! Seja muito
            bem-vindo!
          </p>
        </div>
      </div>
    </section>
  );
}
