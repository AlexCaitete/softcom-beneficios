import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/softcom-home/Softcom';

import { Toaster } from "sonner";

import { Layout } from "./components/adm-page/Layout";

import { AdminPage } from "./components/adm-page/AdminPage";
import { EmployeePage } from "./components/funcionario-page/EmployeePage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionario-page" element={<EmployeePage />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="meu-perfil" element={<EmployeePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
