import { useState } from 'react';

function useInputState(initValue) {
  const [state, setState] = useState(initValue);

  const resetState = () => {
    setState('');
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return [state, handleChange, resetState];
}

export default useInputState;
