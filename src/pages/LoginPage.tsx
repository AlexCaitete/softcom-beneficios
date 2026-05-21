import { useState } from 'react';

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F3F4F6]">
      {/* Lado Esquerdo: Identidade Visual */}
      <div className="hidden md:flex md:w-1/2 bg-[#1F2937] p-12 flex-col justify-between text-white">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FBBF24] rounded-lg flex items-center justify-center font-bold text-[#1F2937]">S</div>
            <span className="text-2xl font-bold tracking-tight">Softcom</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Gestão inteligente de <br/> benefícios e recompensas.</h1>
          <p className="text-gray-400">Simplificando o acesso às vantagens que sua equipe merece.</p>
        </div>
      </div>

      {/* Lado Direito: Formulário de Login */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-500">Insira seus dados para acessar o portal.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Matrícula ou E-mail</label>
              <input 
                type="text" 
                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBBF24] outline-none transition-all"
                placeholder="Ex: 123456"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
              <input 
                type="password" 
                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBBF24] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#1F2937] text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl"
            >
              Entrar
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-400 mt-8">
            Precisa de ajuda com seu acesso? <a href="#" className="text-[#FBBF24] font-semibold underline">Fale com o RH</a>
          </p>
        </div>
      </div>
    </div>
  );
}