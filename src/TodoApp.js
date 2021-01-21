import React, { useState } from 'react';
import TodoList from './TodoList.js';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Learn Typscript', completed: false },
    { id: 3, task: 'Learn NodeJS', completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

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

      {/* The List of Todos */}
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
