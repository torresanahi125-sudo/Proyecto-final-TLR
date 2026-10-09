import React from 'react';

export default function Form() {
  return (
    <form className="todo-form">
      {/* Input para ingresar tareas con su ícono */}
      <div className="input-container">
        <i className="fa-solid fa-pen-to-square input-icon"></i>
        <input type="text" placeholder="Ingresar nueva tarea..." />
      </div>

      {/* Botón para generar la tarea */}
      <button type="submit" className="todo-button">
        Agregar
      </button>

      {/* Selector de filtrado con su ícono */}
      <div className="select-container">
        <i className="fa-solid fa-filter select-icon"></i>
        <select name="todos" className="filter-todo">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="uncompleted">Incompletas</option>
        </select>
      </div>
    </form>
  );
}
