import React from 'react';
import { useFrame } from '@react-three/fiber';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';
import { easing } from 'maath';

function MovingCamera() {
  const { hoveredScreen } = useHoverScreenStore();

  useFrame((state, delta) => {
    if (hoveredScreen) {
      hoveredScreen.parent?.updateWorldMatrix(true, true);
      hoveredScreen.parent?.localToWorld(hoveredScreen.position.set(0, 1.61803398875 / 2, 1.25));
      hoveredScreen.parent?.getWorldQuaternion(hoveredScreen.quaternion);
      easing.damp3(state.camera.position, hoveredScreen.position, 0.5, delta);
      easing.dampQ(state.camera.quaternion, hoveredScreen.quaternion, 0.4, delta);
    } else {
      easing.damp3(state.camera.position, [1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return <></>;
}

export default MovingCamera;
