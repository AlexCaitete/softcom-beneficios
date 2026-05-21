import { Layout } from "./Layout";
import { Dashboard } from "./Dashboard";
import { EmployeeHeader } from "./EmployeeHeader";
import { EmployeeList } from "./EmployeeList";
import { TasksSection } from "./TasksSection";
import { RewardsSection } from "./RewardsSection";
import { PartnersProposals } from "./PartnersProposals";

export default function Funcionario() {
    return (
        <div className="min-h-screen">
            <Layout />
            <Dashboard />
            <EmployeeHeader />
            <EmployeeList />
            <TasksSection />
            <RewardsSection />
            <PartnersProposals />
        </div>
    )
}