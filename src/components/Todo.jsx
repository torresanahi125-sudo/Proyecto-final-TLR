import { FaCheck, FaTrash } from 'react-icons/fa';

export default function Todo() {
  return (
    <div className="todo">
      {/* Texto fijo de la maqueta */}
      <li className="todo-item">Tarea de ejemplo</li>

      {/* Botón de completar con el ícono del check */}
      <button className="complete-btn">
        <FaCheck />
      </button>

      {/* Botón de eliminar con el ícono del tacho */}
      <button className="trash-btn">
        <FaTrash />
      </button>
    </div>
  );
}
