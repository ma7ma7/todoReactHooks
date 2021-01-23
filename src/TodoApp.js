import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  // const initialTodos = [
  //   { id: 1, task: 'Learn React', completed: true },
  //   { id: 2, task: 'Learn Typscript', completed: false },
  //   { id: 3, task: 'Learn NodeJS', completed: true },
  // ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  };

  const removeTodo = (todoId) => {
    // Filter
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    // Set New State
    setTodos(newTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodo);
  };

  const updateTodo = (todoId, task) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: task } : todo
    );

    setTodos(updatedTodo);
  };

  return (
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      {/* Start the Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography color="inherit" variant="h5">
            Todo With Hooks
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          {/* Todo Form */}
          <TodoForm addTodo={addTodo} />

          {/* The List of Todos */}
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
