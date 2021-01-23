import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },

    removeTodo: (todoId) => {
      // Filter
      const newTodos = todos.filter((todo) => todo.id !== todoId);

      // Set New State
      setTodos(newTodos);
    },

    toggleTodo: (todoId) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );

      setTodos(updatedTodo);
    },

    updateTodo: (todoId, task) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: task } : todo
      );

      setTodos(updatedTodo);
    },
  };
};

export default useTodoState;
