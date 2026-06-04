import { useState, useEffect } from "react";

const initialBrands = [
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  ];
  
export default function SectionMarcas() {
    const [brands, setBrands] = useState(initialBrands);

    useEffect(() => {
        const loadBrands = () => {
            const saved = localStorage.getItem("@softcom:brands");
            if (saved) {
                setBrands(JSON.parse(saved));
            }
        };

        loadBrands();
        
        window.addEventListener("storage", loadBrands);
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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