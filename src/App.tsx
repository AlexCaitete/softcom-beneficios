import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/softcom-home/Softcom'
import Funcionario from './components/funcionario-page/Funcionario'

import { Layout } from "./components/funcionario-page/Layout";
import { Dashboard } from "./components/funcionario-page/Dashboard";
import { EmployeeList } from "./components/funcionario-page/EmployeeList";
import { TasksSection } from "./components/funcionario-page/TasksSection";
import { RewardsSection } from "./components/funcionario-page/RewardsSection";
import { PartnersProposals } from "./components/funcionario-page/PartnersProposals";
import Footer from "./components/softcom-home/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionario-page" element={<Funcionario />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="admin"
            element={
              <>
                <Dashboard />
                <EmployeeList />
                <TasksSection />
                <RewardsSection />
                <PartnersProposals />
                <Footer />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;