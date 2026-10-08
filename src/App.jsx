import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

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

