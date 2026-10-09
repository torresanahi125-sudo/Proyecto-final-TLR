import Todo from './Todo';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">No hay tareas pendientes.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;