import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AdminPage } from "./pages/AdminPage";
import { EmployeePage } from "./pages/EmployeePage";
import Benefits from "./components/Benefits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="meu-perfil" element={<EmployeePage />} />
          <Route path="beneficios" element={<Benefits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;