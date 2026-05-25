import "./tailwind.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/softcom-home/Softcom";
import { Toaster } from "sonner";

// Importações da área do Administrador & Funcionário (Mantido para a equipe)
import { Layout } from "./components/adm-page/Layout";
import { AdminPage } from "./components/adm-page/AdminPage";
import { EmployeePage } from "./components/funcionario-page/EmployeePage";

// 👇 SUAS NOVAS IMPORTAÇÕES DA PASTA EXCLUSIVA 👇
import { BeneficiosLayout } from "./components/beneficioclientes-page/BeneficiosLayout";
import { MeusBeneficios } from "./components/beneficioclientes-page/MeusBeneficios";
import { Referrals } from "./components/beneficioclientes-page/Referrals";
import { Vouchers } from "./components/beneficioclientes-page/Vouchers";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* === ÁREA DE BENEFÍCIOS DO CLIENTE (Sua nova estrutura do Figma) === */}
        <Route element={<BeneficiosLayout />}>
          {/* Agora apontando para a sua nova tela de Benefícios correta */}
          <Route path="meus-beneficios" element={<MeusBeneficios />} />
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="indicacoes" element={<Referrals />} />
        </Route>

        {/* === ÁREA DO ADMINISTRADOR E FUNCIONÁRIO (Estrutura original) === */}
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="meu-perfil" element={<EmployeePage />} />
        </Route>

        {/* Rota de fallback caso digitem o caminho antigo */}
        <Route
          path="/funcionario-page"
          element={<Navigate to="/meus-beneficios" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
