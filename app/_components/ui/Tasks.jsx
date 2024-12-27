import AddTask from "../AddTask";
import TaskList from "../TaskList";
import { TasksProvider } from "../../contexts/TaskContext";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={() => (alert('new task has been created'))} />
      <TaskList />
    </TasksProvider>
  );
}