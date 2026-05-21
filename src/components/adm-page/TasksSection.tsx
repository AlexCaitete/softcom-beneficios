import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Target,
  Trash2,
  Plus,
  X,
  Edit2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Task {
  id: number;
  title: string;
  employee: string;
  progress: number;
  current: number;
  goal: number;
  status: "em-andamento" | "concluida" | "atrasada";
  deadline: string;
  points: number;
  prize: string;
}

const EMPLOYEES = [
  "Ana Silva",
  "Carlos Mendes",
  "Beatriz Costa",
  "Diego Alves",
  "Eduarda Lima",
  "Fernando Rocha",
];

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Fechar 10 vendas no mês",
    employee: "Ana Silva",
    progress: 80,
    current: 8,
    goal: 10,
    status: "em-andamento",
    deadline: "2026-05-31",
    points: 500,
    prize: "Bônus R$ 500",
  },
  {
    id: 2,
    title: "Desenvolver 3 features completas",
    employee: "Carlos Mendes",
    progress: 66,
    current: 2,
    goal: 3,
    status: "em-andamento",
    deadline: "2026-05-25",
    points: 400,
    prize: "Dia de folga extra",
  },
  {
    id: 3,
    title: "Criar 15 designs aprovados",
    employee: "Beatriz Costa",
    progress: 100,
    current: 15,
    goal: 15,
    status: "concluida",
    deadline: "2026-05-20",
    points: 600,
    prize: "Vale presente R$ 300",
  },
];

function TaskFormModal({
  task,
  onSave,
  onClose,
}: {
  task?: Task;
  onSave: (data: any) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: task?.title ?? "",
    employee: task?.employee ?? EMPLOYEES[0],
    current: task?.current ?? 0,
    goal: task?.goal ?? 10,
    status: task?.status ?? "em-andamento",
    deadline: task?.deadline ?? "",
    points: task?.points ?? 300,
    prize: task?.prize ?? "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simula delay do servidor
    onSave(form);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl">
        <div className="bg-black text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {task ? "Editar Tarefa" : "Adicionar Tarefa"}
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Título"
            className="w-full border-2 p-2 rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <select
              value={form.employee}
              onChange={(e) => setForm({ ...form, employee: e.target.value })}
              className="border-2 p-2 rounded-lg"
            >
              {EMPLOYEES.map((emp) => (
                <option key={emp} value={emp}>
                  {emp}
                </option>
              ))}
            </select>
            <input
              type="date"
              required
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              className="border-2 p-2 rounded-lg"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-3 bg-[#FFD700] rounded-lg font-bold hover:bg-[#FFC700] transition-colors"
          >
            {isLoading
              ? "Salvando..."
              : task
                ? "Salvar Alterações"
                : "Adicionar Tarefa"}
          </button>
        </form>
      </div>
    </div>
  );
}

export function TasksSection() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (data: any) => {
    const progress = Math.round((data.current / data.goal) * 100);
    setTasks([...tasks, { id: Date.now(), progress, ...data }]);
    setShowAddModal(false);
    toast.success("Tarefa criada com sucesso!");
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Tarefas e Metas</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-[#FFD700] rounded-lg font-semibold flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Adicionar
          </button>
        </div>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Responsável: {task.employee}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-[#FFD700]"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddModal && (
        <TaskFormModal
          onSave={handleAddTask}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </section>
  );
}
