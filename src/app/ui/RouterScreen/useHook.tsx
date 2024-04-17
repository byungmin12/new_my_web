import React from 'react';
import useBoolean from '@/app/lib/hooks/useBoolean';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';
import { Group } from 'three';

function useHook() {
  const { bool: isHover, setTrue, setFalse } = useBoolean();

  const { addHoverScreen, removeHoverScreen } = useHoverScreenStore();

  const onPointerOver = (mesh: Group) => {
    setTrue();
    addHoverScreen(mesh);
  };
  const onPointerOut = () => {
    setFalse();
    removeHoverScreen();
  };

  return {
    isHover,
    onPointerOver,
    onPointerOut,
  };
}

export default useHook;
