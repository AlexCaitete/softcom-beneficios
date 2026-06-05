import { useState } from "react";
import { ChevronDown} from "lucide-react";

const faqs = [
    {
      question: "Como funciona a plataforma Softcom?",
      answer: "A Softcom é uma plataforma completa que integra todas as ferramentas necessárias para gerenciar seu comércio digital, desde vendas até logística e atendimento ao cliente."
    },
    {
      question: "Quais são os planos disponíveis?",
      answer: "Oferecemos planos flexíveis que se adaptam ao tamanho do seu negócio, desde pequenos empreendedores até grandes empresas. Entre em contato para conhecer a melhor opção para você."
    },
    {
      question: "Como é o suporte técnico?",
      answer: "Nosso time de suporte está disponível para auxiliar você em todas as etapas. Oferecemos atendimento especializado, documentação completa e treinamentos."
    },
    {
      question: "A plataforma é segura?",
      answer: "Sim! Utilizamos as melhores práticas de segurança da informação, criptografia de dados e seguimos todas as normas de proteção de dados (LGPD)."
    },
    {
      question: "Posso integrar com outros sistemas?",
      answer: "Sim! A Softcom oferece integrações com diversos sistemas de pagamento, ERPs, marketplaces e outras ferramentas essenciais para o seu negócio."
    },
  ];
  
export default function Faq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}