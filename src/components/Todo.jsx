import React from 'react';

export default function Todo() {
  return (
    <div className="todo">
      {/* Texto de la tarea de prueba */}
      <li className="todo-item">Tarea de ejemplo</li>

      {/* Botón para marcar la tarea como completada */}
      <button className="complete-btn">
        <i className="fa-solid fa-check"></i>
      </button>

      {/* Botón que permite eliminarla */}
      <button className="trash-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
