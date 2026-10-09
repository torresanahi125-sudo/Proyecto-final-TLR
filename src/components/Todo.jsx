function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#ffffff',
          flexGrow: 1,
          cursor: 'pointer'
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>

      <button onClick={() => toggleComplete(todo.id)} aria-label="Marcar completada">
        {todo.completed ? '↩️' : '✅'}
      </button>

      <button onClick={() => deleteTodo(todo.id)} aria-label="Eliminar tarea">
        🗑️
      </button>
    </div>
  );
}

export default Todo;