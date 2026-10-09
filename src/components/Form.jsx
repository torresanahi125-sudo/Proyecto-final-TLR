import { useState } from 'react';

function Form({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar una nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" aria-label="Agregar tarea">
        ➕
      </button>
    </form>
  );
}

export default Form;