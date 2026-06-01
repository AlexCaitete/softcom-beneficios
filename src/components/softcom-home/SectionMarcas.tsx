import { useState, useEffect } from "react";

const initialBrands = [
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  ];
  
export default function SectionMarcas() {
    const [brands, setBrands] = useState(initialBrands);

    useEffect(() => {
        // Função para carregar as marcas salvas pelo Admin
        const loadBrands = () => {
            const saved = localStorage.getItem("@softcom:brands");
            if (saved) {
                setBrands(JSON.parse(saved));
            }
        };

        loadBrands();
        
        // 'storage' detecta mudanças feitas em outras abas do navegador
        window.addEventListener("storage", loadBrands);
        
        // 'local-storage-update' é o nosso evento personalizado para atualizar 
        // a lista instantaneamente quando a mudança ocorre na mesma aba (ex: Admin salvando algo)
        window.addEventListener("local-storage-update", loadBrands);
        return () => {
            window.removeEventListener("storage", loadBrands);
            window.removeEventListener("local-storage-update", loadBrands);
        };
    }, []);

    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-gray-900 text-center text-3xl font-bold mb-12">Marcas Parceiras</h2>
          {/* Grid responsiva: começa com 2 colunas em mobile e vai até 6 em telas grandes */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#FFD700] transition-colors">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}