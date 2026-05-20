import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { EmployeeList } from "./components/EmployeeList";
import { TasksSection } from "./components/TasksSection";
import { RewardsSection } from "./components/RewardsSection";
import { PartnersProposals } from "./components/PartnersProposals";
import Footer from "./components/softcom-home/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
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
  );
}

export default App;
