const brands = [
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
    { name: "iFood", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/IFood_logo.svg" },
  ];
  
export default function SectionMarcas() {
    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-gray-900 text-center text-3xl font-bold mb-12">Marcas Parceiras</h2>
          <div className="grid grid-cols-3 gap-12 items-center">
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