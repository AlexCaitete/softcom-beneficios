import { Dashboard } from '../components/Dashboard';
import { EmployeeList } from '../components/EmployeeList';
import { TasksSection } from '../components/TasksSection';
import { RewardsSection } from '../components/RewardsSection';
import { PartnersProposals } from '../components/PartnersProposals';

export function AdminPage() {
  return (
    <div>
      <Dashboard />
      <EmployeeList />
      <TasksSection />
      <RewardsSection />
      <PartnersProposals />
    </div>
  );
}
