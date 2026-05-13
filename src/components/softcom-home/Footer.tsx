export default function Footer() {
    return (
        <footer className="bg-[#20252a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e título */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
                  src="/src/assets/logoBranca.png"
                  alt="Softcom"
                  className="h-10 object-contain"
                />
          </div>
          <p className="text-gray-400 text-sm">
            Tecnologia que conecta você ao futuro.
          </p>
        </div>

        {/* Saiba mais */}
        <div>
          <h3 className="text-[16px] text-[#FFD700] font-semibold mb-4">Saiba mais</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-100">Seja nosso Cliente</a></li>
            <li><a href="#" className="hover:text-gray-100">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-gray-100">Seja um Franqueado</a></li>
          </ul>
        </div>

        {/* Fale Conosco */}
        <div>
          <h3 className="text-[16px] text-[#FFD700] font-semibold mb-4">Fale Conosco</h3>
          <p className="text-gray-400">0800 003 3600</p>
          <p className="text-gray-400">contato@softcomtecnologia.com.br</p>

          <div className="flex gap-4 mt-6 justify-start">
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        © 2026 Softcom. Todos os direitos reservados.
      </div>
    </footer>
    )
}