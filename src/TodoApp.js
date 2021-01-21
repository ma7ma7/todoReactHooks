import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Learn React', completed: true },
    { id: 2, task: 'Learn Typscript', completed: false },
    { id: 3, task: 'Learn NodeJS', completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: 4, task: newTodo, completed: false }]);
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
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
