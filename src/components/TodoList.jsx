import React from 'react';
import Todo from './Todo'; // Importamos el componente individual de la tarea

export default function TodoList() {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* De momento, renderizamos dos tareas fijas para ver cómo quedan en la maqueta */}
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}
