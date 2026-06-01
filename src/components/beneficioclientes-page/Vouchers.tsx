import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Tag } from 'lucide-react';

interface Voucher {
  id: number;
  category: string;
  title: string;
  description: string;
  discount: string;
  code: string; 
  expiration: string; 
  isNew?: boolean; 
}

const initialActiveVouchers: Voucher[] = [
  {
    id: 1,
    category: 'Saúde',
    title: 'Academia SmartFit',
    description: 'Válido para qualquer plano anual',
    discount: '50% OFF',
    code: 'SOFT50FIT',
    expiration: 'Expira em 30 dias',
  },
  {
    id: 2,
    category: 'Alimentação',
    title: 'Aiqfome Delivery',
    description: 'Em pedidos acima de R$ 50',
    discount: 'R$ 20 OFF',
    code: 'SOFTFOOD30',
    expiration: 'Expira em 15 dias',
  },
];

const initialAvailableVouchers: Voucher[] = [
  {
    id: 3,
    category: 'Entretenimento',
    title: 'Cinema Desconto',
    description: 'Desconto em ingressos de cinema',
    discount: '35% OFF',
    code: 'CINE35SOFT',
    expiration: 'Expira em 30 dias',
    isNew: true,
  },
  {
    id: 4,
    category: 'Música',
    title: 'Streaming de Música',
    description: 'Desconto em assinaturas de streaming',
    discount: '40% OFF',
    code: 'SOFTMUSIC40',
    expiration: 'Expira em 15 dias',
    isNew: true,
  },
  {
    id: 5,
    category: 'Tecnologia',
    title: 'Eletrônicos Desconto',
    description: 'Desconto em produtos eletrônicos',
    discount: '3 meses grátis',
    code: 'SOFTECHFREE',
    expiration: 'Expira em 60 dias',
    isNew: true,
  },
];

export function Vouchers() {
  // 1. Carrega os vouchers ativos salvos ou os iniciais
  const [activeVouchers, setActiveVouchers] = useState<Voucher[]>(() => {
    const saved = localStorage.getItem("@softcom:userActiveVouchers");
    return saved ? JSON.parse(saved) : initialActiveVouchers;
  });

  const [availableVouchers, setAvailableVouchers] = useState<Voucher[]>([]);

  // Efeito principal de sincronização
  useEffect(() => {
    const syncVouchers = () => {
      // Busca o catálogo geral definido pelo Admin
      const savedCatalog = localStorage.getItem("@softcom:catalogVouchers");
      const catalog: Voucher[] = savedCatalog ? JSON.parse(savedCatalog) : [];
      
      // Cria um set de IDs ativos para facilitar a filtragem (evita duplicidade)
      const activeIds = new Set(activeVouchers.map(v => v.id));
      
      // Junta os vouchers iniciais do código com os criados dinamicamente no Admin
      const allPotential = [...initialAvailableVouchers, ...catalog];
      
      // Filtra: Remove o que já foi resgatado e garante que IDs repetidos não apareçam
      const filtered = allPotential.filter((v, index, self) => 
        !activeIds.has(v.id) && index === self.findIndex(t => t.id === v.id)
      );
      
      setAvailableVouchers(filtered);
    };

    syncVouchers();

    // Escuta atualizações vindas da página Admin
    window.addEventListener("local-storage-update", syncVouchers);
    window.addEventListener("storage", syncVouchers);
    return () => {
      window.removeEventListener("local-storage-update", syncVouchers);
      window.removeEventListener("storage", syncVouchers);
    };
  }, [activeVouchers]);

  const handleCopyCode = (code: string | undefined) => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success('Código do voucher copiado!');
    }
  };

  const handleRedeemVoucher = (voucher: Voucher) => {
    // Adiciona o voucher à lista de ativos e remove o selo de "Novo"
    const newActiveList = [...activeVouchers, { ...voucher, isNew: false }];
    setActiveVouchers(newActiveList);
    // Salva a nova lista de ativos do usuário no storage
    localStorage.setItem("@softcom:userActiveVouchers", JSON.stringify(newActiveList));
    toast.success(`Voucher "${voucher.title}" resgatado com sucesso!`);
  };

  return (
    <div className="space-y-12">
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Meus Vouchers Ativos</h2>
            <p className="text-gray-500 mt-1">Vouchers que você já resgatou.</p>
          </div>
          <span className="bg-[#10B981] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            {activeVouchers.length} ativos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeVouchers.map((voucher) => (
            <div key={voucher.id} className="bg-[#10B981] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">

                  <div>
                    <span className="bg-white/20 px-2.5 py-1 rounded-md text-xs font-semibold mb-2 inline-block">{voucher.category}</span>
                    <h3 className="font-bold text-xl leading-tight">{voucher.title}</h3>
                    <p className="text-sm text-green-100 mt-1">{voucher.description}</p>
                  </div>
                </div>
                <span className="bg-white text-[#10B981] font-bold px-3 py-1.5 rounded-lg text-lg shadow-sm">{voucher.discount}</span>
              </div>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-xs text-green-100 mb-1">Código do Voucher</p>
                  <p className="font-mono text-2xl font-bold tracking-wider">{voucher.code}</p>
                  <p className="text-xs text-green-100 mt-1">{voucher.expiration}</p>
                </div>
                <button onClick={() => handleCopyCode(voucher.code)} className="bg-white text-[#10B981] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
                  Copiar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Vouchers Disponíveis</h2>
            <p className="text-gray-500 mt-1">Clique para resgatar e ativar seu desconto</p>
          </div>
          <span className="bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            {availableVouchers.length} disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableVouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group flex flex-col justify-between"
            >
              {voucher.isNew && (
                <div className="absolute top-3 right-3 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Novo
                </div>
              )}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Tag className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{voucher.category}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{voucher.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{voucher.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xl font-bold text-amber-500">{voucher.discount}</span>
                <button 
                  onClick={() => handleRedeemVoucher(voucher)}
                  className="bg-blue-600 px-4 py-2 text-sm rounded-lg font-bold text-white cursor-pointer hover:bg-blue-700 transition-colors shadow-md"
                >
                  Resgatar voucher
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}