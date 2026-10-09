import { FaPlus } from 'react-icons/fa';

export default function Form() {
  return (
    <form className="todo-form">
      {/* Contenedor del campo de texto con su ícono */}
      <div className="input-container">
        <FaPlus className="input-icon" />
        <input type="text" placeholder="Ingresar nueva tarea..." />
      </div>

      {/* Botón para generar la tarea */}
      <button type="submit" className="todo-button">
        Agregar
      </button>

      {/* Selector de filtrado con clases nativas */}
      <div className="select-container">
        <select name="todos" className="filter-todo">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="uncompleted">Incompletas</option>
        </select>
      </div>
    </form>
  );
}
