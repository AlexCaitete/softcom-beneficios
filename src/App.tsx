import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Layout } from "./components/adm-page/Layout";
// Adicione esta linha:
import { AdminPage } from "./components/adm-page/AdminPage";
import { EmployeePage } from "./pages/EmployeePage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="meu-perfil" element={<EmployeePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
