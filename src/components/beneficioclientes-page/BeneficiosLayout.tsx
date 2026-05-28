import { ProfileHeaderBeneficios } from "./ProfileHeaderBeneficios";
import { MenuNav } from "./MenuNav";
import { MainRender } from "./MainRender";
// O componente ProfileHeaderBeneficios agora contém a lógica do cabeçalho e do botão "Sair"
export function BeneficiosLayout() {

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeaderBeneficios />
      <MenuNav />
      <MainRender />
    </div>
  );
}
