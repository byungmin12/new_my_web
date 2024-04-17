import React, { useState } from 'react';

function useBoolean(defaultValue = false) {
  const [bool, setBool] = useState(defaultValue);
  const setTrue = () => setBool(true);
  const setFalse = () => setBool(false);

  return { bool, setTrue, setFalse };
}

export default useBoolean;
