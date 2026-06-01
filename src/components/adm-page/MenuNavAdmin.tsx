import { useState } from 'react';
import { RewardsSection } from './RewardsSection';
import { VouchersSection } from './VouchersSection';

export function MenuNavAdmin() {
  const [activeCatalogTab, setActiveTab] = useState<'recompensas' | 'vouchers'>('recompensas');

  return (
    <div className="mt-12"> {/* Adiciona margem superior para separar das outras seções */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex gap-8 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('recompensas')}
            className={`px-4 py-5 font-semibold text-sm transition-colors border-b-2 ${
              activeCatalogTab === 'recompensas'
                ? "text-amber-400 border-amber-400"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Catálogo de Recompensas
          </button>
          <button
            onClick={() => setActiveTab('vouchers')}
            className={`px-4 py-5 font-semibold text-sm transition-colors border-b-2 ${
              activeCatalogTab === 'vouchers'
                ? "text-amber-400 border-amber-400"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Catálogo de Vouchers
          </button>
        </div>
      </nav>

      <div className="bg-gray-50">
        {activeCatalogTab === 'recompensas' ? <RewardsSection /> : <VouchersSection />}
      </div>
    </div>
  );
}
