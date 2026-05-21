import { ProfileHeader } from "./ProfileHeader";
import { StatsCards } from "./StatsCards";
import { MyTasks } from "./MyTasks";
import { RewardsSection } from "./RewardsSection";

export function EmployeePage() {
  // Dados simulados do funcionário logado

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Stats Cards */}
      <StatsCards />

      {/* My Tasks */}
      <MyTasks />

      {/* Rewards Section */}
      <RewardsSection />
      
    </div>
  );
}
