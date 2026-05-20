export default function Perfil() {
    return (
        <div className="w-full bg-[#1F2937] h-74">
            <div className="flex flex-col items-start justify-content p-4"> {/* Primeiro container */}

                <div className="flex items-center gap-4 mt-4"> {/* Segundo container */}
                    <img className="w-[88px] h-[88px] rounded-full object-contain border-4 border-[#FFE100]"
                        src="./src/assets/funcionaria_mulher.png"
                        alt="Foto de perfil"
                    />
                    <h2 className="text-white text-xl leading-none">Olá,<br /> <span className="text-[#FFE100] text-2xl leading-none">Marta</span>!</h2>
                </div>

                <div className="flex gap-[4.5rem] items-start justify-between p-4"> {/* Terceiro container */}
                    <div className=" flex flex-col justify-start"> {/* Quarto container */}
                        <h1 className="text-[#FFE100] text-xl font-semibold">Meu cashback</h1>
                        <h3 className="text-white leading-none">Saldo disponível: <span className="text-[#FFE100] text-lg font-medium">R$ 150,00</span></h3>
                        <h3 className="text-white mb-3">Cashback pendente: <span className="text-[#FFE100] text-lg font-medium">R$ 60,00</span></h3>
                        <button className="self-start text-[#FFE100] text-center text-base font-normal rounded-full border-2 border-[#FFE100] px-3 hover:cursor-pointer hover:bg-[#FFE100] hover:text-[#1F2937] transition-colors">Usar Cashback</button>
                    </div>
                        <div className="flex flex-col justify-start gap-1">
                            <h1 className="text-[#FFE100] text-xl font-semibold">Meus pontos</h1>
                            <h3 className="text-white mb-3">350 pontos = <span className="text-[#FFE100] text-lg font-medium">R$ 35,00</span></h3>
                            <button className="self-start text-[#FFE100] text-center text-base font-normal rounded-full border-2 border-[#FFE100] px-3 hover:cursor-pointer hover:bg-[#FFE100] hover:text-[#1F2937] transition-colors">Converter pontos</button>
                        </div>
                </div>
            </div>
        </div>
    )
}