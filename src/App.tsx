import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./components/DashboardLayout";
import Benefits from "./components/Benefits";
import Vouchers from "./components/Vouchers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Rotas do Dashboard (Funcionário) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Benefits />} />
          <Route path="vouchers" element={<Vouchers />} />
        </Route>

        {/* Rotas de Admin e Cliente seriam adicionadas aqui futuramente */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;