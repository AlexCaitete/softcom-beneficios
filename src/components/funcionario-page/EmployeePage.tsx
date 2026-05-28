import { ProfileHeader } from "./ProfileHeader";
import { StatsCards } from "./StatsCards";
import { MyTasks } from "./MyTasks";
import { RewardsSection } from "./RewardsSection";

export function EmployeePage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />

      <StatsCards />

      <MyTasks />

      <RewardsSection />  
    </div>
  );
}
