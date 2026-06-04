Markdown
# 📂 Softcom Benefícios - Portal de Vantagens Corporativas

<p align="center">
  <img src="public/logo.png" alt="Softcom Logo" width="200" style="background-color: white; padding: 10px; border-radius: 8px;" />
</p>

<p align="center">
  <strong>Solução digital de inteligência e gestão de benefícios institucionais para clientes e colaboradores.</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-links-úteis">Links Úteis</a>
</p>

---

## 💻 Sobre o Projeto

O **Softcom Benefícios** é uma aplicação web moderna voltada para a centralização, visualização e gerenciamento de parcerias e vantagens comerciais. Desenvolvido como projeto prático para a residência tecnológica no **Porto Digital**, o sistema visa otimizar a experiência do usuário através de interfaces fluidas, integrando o ecossistema de clientes, colaboradores e administradores da Softcom em uma única plataforma.

O grande diferencial do projeto reside na separação clara de escopos através de portais dedicados, garantindo segurança, responsividade adaptada para múltiplos dispositivos e atalhos dinâmicos de governança.

---

## ✨ Funcionalidades

*   **Portal do Cliente:** Visualização intuitiva de marcas parceiras e cupons de desconto disponíveis.
*   **Portal do Funcionário:** Acesso a vantagens corporativas internas e gestão de perfil.
*   **Portal do Administrador:** Área restrita e protegida para governança do sistema, gerenciamento de propostas de parceiros e métricas comerciais.
*   **Design Totalmente Responsivo:** Layout adaptado minuciosamente para smartphones, tablets e desktops na página Home e componentes globais.
*   **Navegação Dinâmica:** Roteamento SPA (*Single Page Application*) sem recarregamento de página.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema técnico do projeto foi selecionado para garantir alta performance, tipagem estática segura e estilização ágil:

*   **React (v18+)** - Biblioteca base para construção da interface baseada em componentes reutilizáveis.
*   **TypeScript** - Superset que adiciona tipagem estática e segurança contra erros em tempo de desenvolvimento.
*   **Vite** - Ferramenta de build ultra-rápida para empacotamento e hot-reload otimizado.
*   **Tailwind CSS** - Framework utilitário de CSS para estilização moderna e design responsivo nativo.
*   **React Router DOM** - Gerenciamento de rotas e navegação interna da SPA.
*   **Lucide React** - Pacote de ícones minimalistas e vetoriais de alta performance.

---

## 📁 Estrutura do Projeto

Abaixo está a organização dos principais módulos focados na Home e nos portais:

```text
softcom-app/
├── public/                 # Arquivos estáticos globais (imagens, logos e manifestos)
├── src/
│   ├── assets/             # Recursos de mídia locais
│   ├── components/         # Componentes modulares reutilizáveis
│   │   ├── adm-page/       # Telas e tabelas de propostas administrativas
│   │   └── softcom-home/   # Componentes da página inicial (Header, Apresentacao, Carousel, Footer)
│   ├── pages/              # Páginas principais que agrupam as seções
│   ├── App.tsx             # Arquivo raiz com configurações de rotas
│   └── main.tsx            # Ponto de entrada da aplicação React
├── package.json            # Gerenciamento de dependências e scripts do ecossistema Node
└── tailwind.config.js      # Configurações personalizadas do Tailwind CSS
🚀 Como Executar o Projeto Localmente
Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o Git e o Node.js.

Bash
# 1. Clone este repositório
$ git clone [https://github.com/AlexCaitete/softcom-beneficios.git](https://github.com/AlexCaitete/softcom-beneficios.git)

# 2. Acesse a pasta do projeto no terminal
$ cd softcom-beneficios

# 3. Instale as dependências necessárias
$ npm install

# 4. Execute a aplicação em modo de desenvolvimento
$ npm run dev
O terminal indicará o endereço local para acesso, geralmente: http://localhost:5173

🔗 Links Úteis e Deploy
Link Oficial do Deploy (Vercel): softcom-beneficios.vercel.app

Repositório Original: GitHub - AlexCaitete/softcom-beneficios
