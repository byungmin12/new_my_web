import React from 'react';
import { useFrame } from '@react-three/fiber';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';
import { easing } from 'maath';
import useHoverScreen from '@/app/lib/hooks/useHoverScreen';
import { hoverAnimationTime } from '@/app/lib/config/const';

function MovingCamera() {
  const { hoveredScreen } = useHoverScreenStore();
  const { onHoverScreen } = useHoverScreen();

  useFrame((state, delta) => {
    if (hoveredScreen) {
      onHoverScreen(state, delta);
    } else {
      easing.damp3(state.camera.position, [1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], hoverAnimationTime / 1000, delta);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return <></>;
}

export default MovingCamera;
