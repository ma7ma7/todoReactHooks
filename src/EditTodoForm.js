import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, task, updateTodo, toggle }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggle();
      }}
      style={{ width: '50%' }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        style={{ marginLeft: '1rem' }}
      />
    </form>
  );
}

export default EditTodoForm;
