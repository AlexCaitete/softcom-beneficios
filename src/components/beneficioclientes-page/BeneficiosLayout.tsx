import { ProfileHeaderBeneficios } from "./ProfileHeaderBeneficios";
import { MenuNav } from "./MenuNav";
import { MainRender } from "./MainRender";

export function BeneficiosLayout() {

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeaderBeneficios />
      <MenuNav />
      <MainRender />
    </div>
  );
}
