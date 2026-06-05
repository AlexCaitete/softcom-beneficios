import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export const employee = {
    name: "Ana Silva",
    role: "Gerente de Vendas",
    avatar: "AS",
    points: 2400,
    performance: 90,
    tasksCompleted: 18,
    totalTasks: 20,
    rewards: 5,
    level: "Ouro",
    nextLevelPoints: 3000,
};

export function ProfileHeader() {
    const [currentEmployee, setCurrentEmployee] = useState(employee);

    useEffect(() => {
        const loadEmployee = () => {
            const saved = localStorage.getItem("@softcom:employee");
            if (saved) {
                setCurrentEmployee(JSON.parse(saved));
            } else {
                localStorage.setItem("@softcom:employee", JSON.stringify(employee));
            }
        };

        loadEmployee();
        window.addEventListener("storage", loadEmployee);
        window.addEventListener("local-storage-update", loadEmployee);
        return () => {
            window.removeEventListener("storage", loadEmployee);
            window.removeEventListener("local-storage-update", loadEmployee);
        };
    }, []);

    const pointsToNextLevel = currentEmployee.nextLevelPoints - currentEmployee.points;
    const progressToNextLevel = (currentEmployee.points / currentEmployee.nextLevelPoints) * 100;

    return(
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-8 md:py-12 border-b-4 border-[#FFD700]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center text-3xl font-bold text-black flex-shrink-0">
                {currentEmployee.avatar}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{currentEmployee.name}</h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-4">{currentEmployee.role}</p>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                  <div className="px-4 py-2 bg-[#FFD700] text-black rounded-lg font-bold">
                    Nível {currentEmployee.level}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#FFD700]" />
                    <span className="font-bold text-lg">
                      {currentEmployee.points} pontos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 w-full lg:w-auto lg:min-w-[300px]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-700">Progresso para próximo nível</span>
                <span className="text-sm font-bold ml-2 text-gray-700">
                   {pointsToNextLevel} pts faltam
                </span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-3 mb-2">
                <div
                  className="bg-[#FFD700] h-3 rounded-full transition-all"
                  style={{ width: `${progressToNextLevel}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                Meta: {currentEmployee.nextLevelPoints} pontos
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}