import { useState } from "react";
import { ImageWithFallback } from "./Ui/ImageWithFallback";

interface Benefit {
  id: number;
  title: string;
  discount: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

export default function Benefits() {
  const [benefits] = useState<Benefit[]>([
    { id: 1, title: 'Academia SmartFit', discount: '50%', description: 'Desconto em qualquer plano anual', category: 'Saúde & Bem-estar', image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=1080', featured: true },
    { id: 2, title: 'Farmácias Pague Menos', discount: '40%', description: 'Medicamentos e produtos de higiene', category: 'Saúde', image: 'https://images.unsplash.com/photo-1765031092161-a9ebe556117e?q=80&w=1080', featured: true },
    { id: 3, title: 'Cinemark', discount: '35%', description: 'Ingressos de cinema', category: 'Entretenimento', image: 'https://images.unsplash.com/photo-1739433437912-cca661ba902f?q=80&w=1080', featured: true },
    { id: 4, title: 'iFood', discount: '30%', description: 'Pedidos acima de R$ 30', category: 'Alimentação', image: 'https://images.unsplash.com/photo-1640082380928-2f7079392823?q=80&w=1080', featured: true },
    { id: 5, title: 'Spotify Premium', discount: '20%', description: 'Plano individual ou família', category: 'Entretenimento', image: '🎵', featured: false },
    { id: 6, title: 'Uber', discount: '15%', description: 'Corridas até R$ 10 de desconto', category: 'Transporte', image: '🚗', featured: false },
    { id: 7, title: 'Livraria Cultura', discount: '25%', description: 'Livros e material escolar', category: 'Educação', image: '📚', featured: false },
    { id: 8, title: 'Cursos Online Udemy', discount: '30%', description: 'Qualquer curso da plataforma', category: 'Educação', image: '🎓', featured: false },
    { id: 9, title: 'Restaurante Outback', discount: '20%', description: 'Válido de segunda a quinta', category: 'Alimentação', image: '🥩', featured: false },
    { id: 10, title: 'Lojas Renner', discount: '15%', description: 'Roupas e acessórios', category: 'Moda', image: '👔', featured: false }
  ]);

  const featuredBenefits = benefits.filter((b) => b.featured);
  const regularBenefits = benefits.filter((b) => !b.featured);

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--texto-escuro)]">Descontos em Destaque</h2>
            <p className="text-gray-600 mt-1">Os melhores benefícios para você</p>
          </div>
          <div className="bg-[#FFC700] text-black px-5 py-2 rounded-full text-sm font-bold">
            {featuredBenefits.length} ofertas
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#FFC700] transform hover:-translate-y-2">
              <div className="relative h-48 bg-gray-900">
                <ImageWithFallback src={benefit.image} alt={benefit.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#FFC700] text-black rounded-full px-6 py-3 font-bold text-3xl shadow-lg">
                    {benefit.discount}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="bg-yellow-100 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {benefit.category}
                </span>
                <h3 className="font-bold text-xl mt-3 mb-2 text-[var(--texto-escuro)]">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <button className="w-full bg-[#FFC700] text-black py-3 rounded-lg font-bold hover:bg-[#e5b300] transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--texto-escuro)] mb-6">Mais Benefícios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-center p-6">
                <div className="text-4xl mr-4">{benefit.image}</div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{benefit.category}</span>
                  <h3 className="font-bold text-lg text-[var(--texto-escuro)]">{benefit.title}</h3>
                </div>
                <div className="text-[#FFC700] font-bold text-xl ml-4">{benefit.discount}</div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-gray-100 text-[var(--texto-escuro)] py-2 rounded-lg font-bold hover:bg-[#FFC700] transition-colors">
                  Resgatar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}