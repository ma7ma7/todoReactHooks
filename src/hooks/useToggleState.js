import { useState } from 'react';

function useToggleState(defaultValue) {
  const [state, setState] = useState(defaultValue);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
}

export default useToggleState;
