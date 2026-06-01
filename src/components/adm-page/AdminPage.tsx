import { Dashboard } from './Dashboard';
import { EmployeeList } from './EmployeeList';
import { TasksSection } from './TasksSection';
import { PartnersProposals } from './PartnersProposals';
import { MenuNavAdmin } from './MenuNavAdmin';
import { BrandsManagement } from './BrandsManagement';

export function AdminPage() {

  return (
    <div>
      <div id="metrics-section">
        <Dashboard />
      </div>
      <div id="employees-section">
        <EmployeeList />
      </div>
      <TasksSection />

      <div id="rewards-section">
        <MenuNavAdmin />
      </div>

      <div id="brands-section" className="border-t border-gray-200 mt-12 bg-white">
        <BrandsManagement />
      </div>

      <PartnersProposals />

    </div>

    
  );
}
