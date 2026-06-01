// Importação de ícones do Lucide e hooks de estado/efeito do React
import { Trophy, Star, TrendingUp, CheckCircle, Plus, X, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface Employee {
  id: number;
  name: string;
  role: string;
  avatar: string;
  tasksCompleted: number;
  totalTasks: number;
  points: number;
  performance: number;
  rewards: number;
  color: string;
}

// Lista estática que serve de backup caso o LocalStorage esteja vazio (ID 1 a 6)
const initialEmployees: Employee[] = [
  { id: 1, name: "Ana Silva", role: "Gerente de Vendas", avatar: "AS", tasksCompleted: 18, totalTasks: 20, points: 2400, performance: 90, rewards: 5, color: "#FFD700" },
  { id: 2, name: "Carlos Mendes", role: "Desenvolvedor", avatar: "CM", tasksCompleted: 15, totalTasks: 18, points: 2100, performance: 83, rewards: 4, color: "#FFA500" },
  { id: 3, name: "Beatriz Costa", role: "Designer", avatar: "BC", tasksCompleted: 22, totalTasks: 24, points: 2800, performance: 92, rewards: 6, color: "#FFD700" },
  { id: 4, name: "Diego Alves", role: "Marketing", avatar: "DA", tasksCompleted: 12, totalTasks: 16, points: 1650, performance: 75, rewards: 3, color: "#FFEC8B" },
  { id: 5, name: "Eduarda Lima", role: "Atendimento", avatar: "EL", tasksCompleted: 20, totalTasks: 22, points: 2500, performance: 91, rewards: 5, color: "#FFD700" },
  { id: 6, name: "Fernando Rocha", role: "Financeiro", avatar: "FR", tasksCompleted: 14, totalTasks: 20, points: 1800, performance: 70, rewards: 2, color: "#FFEC8B" },
];

export function EmployeeList() {
  // Estado que gerencia a lista de funcionários. 
  const [employees, setEmployees] = useState<Employee[]>(() => {
    // Usamos '@softcom:employees_v2' para garantir que o navegador carregue os 6 funcionários originais,
    // mesmo que existam dados de testes antigos (com apenas 2 nomes) salvos no LocalStorage.
    const saved = localStorage.getItem("@softcom:employees_v2");
    return saved ? JSON.parse(saved) : initialEmployees;
  });

  // Estados para controlar a exibição do modal e capturar os dados do formulário
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    avatar: "",
    points: 0
  });

  // Salva automaticamente no navegador sempre que um funcionário é adicionado ou removido
  useEffect(() => {
    localStorage.setItem("@softcom:employees_v2", JSON.stringify(employees));
  }, [employees]);

  // Lógica para processar o formulário e criar um novo objeto de funcionário
  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const employee: Employee = {
      id: Date.now(), // ID único baseado no tempo atual
      ...newEmployee,
      tasksCompleted: 0, // Novos colaboradores iniciam com progresso zerado
      totalTasks: 10,
      performance: 0,
      rewards: 0,
      color: "#" + Math.floor(Math.random()*16777215).toString(16) // Gera uma cor hexadecimal aleatória
    };

    setEmployees([...employees, employee]); // Adiciona à lista
    setNewEmployee({ name: "", role: "", avatar: "", points: 0 }); // Limpa formulário
    setShowModal(false); // Fecha modal
    toast.success("Funcionário adicionado com sucesso!");
  };

  // Lógica para excluir: remove o item da lista filtrando pelo ID
  const handleDeleteEmployee = (id: number) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    toast.error("Funcionário removido");
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Desempenho dos Funcionários</h2>
          <button 
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Adicionar Funcionário
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FFD700] transition-all hover:shadow-lg relative group"
            >
              <button
                onClick={() => handleDeleteEmployee(employee.id)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-black"
                    style={{ backgroundColor: employee.color }}
                  >
                    {employee.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{employee.name}</h3>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                </div>
                {employee.performance >= 90 && (
                  <Trophy className="w-6 h-6 text-[#FFD700]" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Progresso de Tarefas
                    </span>
                    <span className="text-sm font-bold">
                      {employee.tasksCompleted}/{employee.totalTasks}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#FFD700] h-2.5 rounded-full transition-all"
                      style={{
                        width: `${employee.totalTasks > 0 ? (employee.tasksCompleted / employee.totalTasks) * 100 : 0}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                      <span className="text-xs text-gray-600">Performance</span>
                    </div>
                    <p className="text-xl font-bold">{employee.performance}%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-gray-600" />
                      <span className="text-xs text-gray-600">Pontos</span>
                    </div>
                    <p className="text-xl font-bold">{employee.points}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>{employee.rewards} prêmios conquistados</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Adicionar Funcionário */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
            <div className="bg-black text-white p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Novo Funcionário</h2>
              <button onClick={() => setShowModal(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddEmployee} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  required
                  className="w-full border-2 p-2 rounded-lg"
                  value={newEmployee.name}
                  onChange={e => setNewEmployee({...newEmployee, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                <input
                  required
                  className="w-full border-2 p-2 rounded-lg"
                  value={newEmployee.role}
                  onChange={e => setNewEmployee({...newEmployee, role: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Iniciais (Avatar)</label>
                  <input required maxLength={2} className="w-full border-2 p-2 rounded-lg" value={newEmployee.avatar} onChange={e => setNewEmployee({...newEmployee, avatar: e.target.value.toUpperCase()})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pontos Iniciais</label>
                  <input type="number" required className="w-full border-2 p-2 rounded-lg" value={newEmployee.points} onChange={e => setNewEmployee({...newEmployee, points: Number(e.target.value)})} />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-colors">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
