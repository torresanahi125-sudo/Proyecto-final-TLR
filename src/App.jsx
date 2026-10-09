
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'; // <- Asegurate de que esta línea esté ACÁ

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas de Ada</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}
