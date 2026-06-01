import { CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { employee } from "./ProfileHeader";

const getStatusStyles = (status: string) => {
    switch (status) {
      case "concluida":
        return {
          bg: "bg-green-50",
          border: "border-green-500",
          text: "text-green-700",
          icon: CheckCircle2,
        };
      case "atrasada":
        return {
          bg: "bg-red-50",
          border: "border-red-500",
          text: "text-red-700",
          icon: AlertCircle,
        };
      default:
        return {
          bg: "bg-yellow-50",
          border: "border-[#FFD700]",
          text: "text-yellow-700",
          icon: Clock,
        };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "concluida":
        return "Concluída";
      case "atrasada":
        return "Atrasada";
      default:
        return "Em Andamento";
    }
  };

// 1. DEFINIÇÃO DAS TAREFAS PADRÃO: Criamos esta lista para que, no primeiro acesso,
// o funcionário não veja uma tela vazia antes do Admin salvar algo.
const defaultTasksForAna = [
    {
      id: 1,
      title: "Fechar 10 vendas no mês",
      progress: 80,
      current: 8,
      goal: 10,
      status: "em-andamento",
      deadline: "2026-05-31",
      points: 500,
      prize: "Bônus R$ 500",
    },
    {
      id: 4,
      title: "Treinar 3 novos colaboradores",
      progress: 100,
      current: 3,
      goal: 3,
      status: "concluida",
      deadline: "2026-05-15",
      points: 400,
      prize: "Dia de folga extra",
    },
    {
      id: 5,
      title: "Aumentar ticket médio em 20%",
      progress: 65,
      current: 13,
      goal: 20,
      status: "em-andamento",
      deadline: "2026-05-28",
      points: 600,
      prize: "Vale presente R$ 300",
    },
];

export function MyTasks() {
    // 1. ESTADO INICIAL: Aqui é o segredo. Se você reiniciar o site e o LocalStorage
    // estiver vazio, ele não deve ficar em branco, mas sim carregar as tarefas que 
    // o sistema espera que existam por padrão.
    const [myTasks, setMyTasks] = useState<any[]>([]);

    useEffect(() => {
        const loadTasks = () => {
            const saved = localStorage.getItem("@softcom:tasks");
            
            if (saved) {
                // Se o "banco de dados" existe, mostramos exatamente o que o Admin definiu.
                const allTasks = JSON.parse(saved);
                const filtered = allTasks.filter((t: any) => t.employee === employee.name);
                setMyTasks(filtered);
            } else {
                // Se for o primeiro acesso ao site, carregamos o padrão para não ver a tela vazia.
                setMyTasks(defaultTasksForAna);
            }
        };

        // 3. EXECUÇÃO IMEDIATA: Roda assim que a tela abre.
        loadTasks();

        // 4. SINCRONIZAÇÃO ENTRE ABAS: Se você tiver a aba do Admin aberta e deletar
        // uma tarefa lá, esse evento 'storage' avisa esta aba para recarregar os dados
        // sem que o usuário precise dar F5.
        window.addEventListener("storage", loadTasks);
        
        // Limpeza do ouvinte ao sair da tela para não gastar memória.
        return () => window.removeEventListener("storage", loadTasks);
    }, []);

    return (
        <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Minhas Tarefas</h2>

          <div className="space-y-4">
            {myTasks.map((task) => {
              const statusStyles = getStatusStyles(task.status);
              const StatusIcon = statusStyles.icon;

              return (
                <div
                  key={task.id}
                  className={`bg-white border-2 ${statusStyles.border} rounded-xl p-6 hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 ${statusStyles.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <StatusIcon
                            className={`w-5 h-5 ${statusStyles.text}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">
                            {task.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>
                              Prazo:{" "}
                              {new Date(task.deadline).toLocaleDateString(
                                "pt-BR",
                              )}
                            </span>
                            <span>•</span>
                            <span className="text-[#FFD700] font-semibold">
                              Prêmio: {task.prize}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 ${statusStyles.bg} ${statusStyles.text} rounded-full text-sm font-semibold`}
                        >
                          {getStatusLabel(task.status)}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">
                            Progresso: {task.current}/{task.goal}
                          </span>
                          <span className="text-sm font-bold">
                            {task.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              task.status === "concluida"
                                ? "bg-green-500"
                                : task.status === "atrasada"
                                  ? "bg-red-500"
                                  : "bg-[#FFD700]"
                            }`}
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-black text-white rounded-lg font-semibold text-sm">
                          +{task.points} pontos
                        </span>
                        {task.status !== "concluida" && (
                          <button className="px-4 py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-colors font-semibold text-sm">
                            Atualizar Progresso
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
}