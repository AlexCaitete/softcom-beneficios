import { useState } from "react";
import { ImageWithFallback } from "./Ui/ImageWithFallback";

interface Voucher {
  id: number;
  title: string;
  code: string;
  discount: string;
  description: string;
  expiresIn: string;
  category: string;
  image: string;
  claimed: boolean;
  active: boolean;
}

export default function Vouchers() {
  const [vouchers, setVouchers] = useState<Voucher[]>([
    {
      id: 1,
      title: "Academia SmartFit",
      code: "SOFT50FIT",
      discount: "50% OFF",
      description: "Válido para qualquer plano anual",
      expiresIn: "30 dias",
      category: "Saúde",
      image:
        "https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=1080",
      claimed: true,
      active: true,
    },
    {
      id: 2,
      title: "iFood Delivery",
      code: "SOFTFOOD30",
      discount: "R$ 20 OFF",
      description: "Em pedidos acima de R$ 50",
      expiresIn: "15 dias",
      category: "Alimentação",
      image:
        "https://images.unsplash.com/photo-1640082380928-2f7079392823?q=80&w=1080",
      claimed: true,
      active: true,
    },
    {
      id: 3,
      title: "Cinemark",
      code: "",
      discount: "35% OFF",
      description: "Ingressos de cinema",
      expiresIn: "45 dias",
      category: "Entretenimento",
      image:
        "https://images.unsplash.com/photo-1739433437912-cca661ba902f?q=80&w=1080",
      claimed: false,
      active: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);

  const handleClaimVoucher = (voucherId: number) => {
    const voucher = vouchers.find((v) => v.id === voucherId);
    if (!voucher) return;
    const code = `SOFT${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setVouchers(
      vouchers.map((v) =>
        v.id === voucherId ? { ...v, claimed: true, code } : v,
      ),
    );
    setSelectedVoucher({ ...voucher, code, claimed: true });
    setShowModal(true);
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Meus Vouchers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={voucher.image}
                  alt={voucher.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{voucher.title}</h3>
                <p className="text-sm text-gray-500">{voucher.category}</p>
              </div>
            </div>
            {!voucher.claimed ? (
              <button
                onClick={() => handleClaimVoucher(voucher.id)}
                className="w-full bg-[#FFC700] py-2 rounded-lg font-bold hover:bg-yellow-500"
              >
                Resgatar {voucher.discount}
              </button>
            ) : (
              <div className="bg-gray-100 p-3 rounded-lg text-center font-mono font-bold">
                CÓDIGO: {voucher.code}
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && selectedVoucher && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Voucher Resgatado!</h3>
            <p className="font-mono text-2xl font-bold bg-gray-100 p-4 rounded-lg mb-6 text-center">
              {selectedVoucher.code}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-bold"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
