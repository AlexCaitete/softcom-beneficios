import { Dashboard } from "./Dashboard";
import { EmployeeList } from "./EmployeeList";
import { TasksSection } from "./TasksSection";
import { RewardsSection } from "./RewardsSection";
import { PartnersProposals } from "./PartnersProposals";

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
