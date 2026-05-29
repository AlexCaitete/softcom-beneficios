import "./tailwind.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/softcom-home/Softcom";
import { Toaster } from "sonner";

import { Layout } from "./components/adm-page/Layout";
import { AdminPage } from "./components/adm-page/AdminPage";
import { EmployeePage } from "./components/funcionario-page/EmployeePage";

import { BeneficiosLayout } from "./components/beneficioclientes-page/BeneficiosLayout";
import { MeusBeneficios } from "./components/beneficioclientes-page/MeusBeneficios";
import { Referrals } from "./components/beneficioclientes-page/Referrals";
import { Vouchers } from "./components/beneficioclientes-page/Vouchers";

import { ChatBot } from "./components/chat-bot/ChatBot";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<BeneficiosLayout />}>
          <Route path="meus-beneficios" element={<MeusBeneficios />} />
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="indicacoes" element={<Referrals />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="meu-perfil" element={<EmployeePage />} />
        </Route>

        <Route
          path="/funcionario-page"
          element={<Navigate to="/meus-beneficios" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
