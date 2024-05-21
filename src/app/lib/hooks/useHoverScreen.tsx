import React, { useEffect } from 'react';
import { easing } from 'maath';
import * as THREE from 'three';
import { RootState } from '@react-three/fiber';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';

function useHoverScreen(q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const { hoveredScreen } = useHoverScreenStore();

  useEffect(() => {
    if (hoveredScreen) {
      console.log(hoveredScreen.parent);
      hoveredScreen.parent?.parent?.updateWorldMatrix(true, true);
      hoveredScreen.localToWorld(p.set(0, 2 / 2, 4));
      hoveredScreen.getWorldQuaternion(q);

      console.log(0, 1.61803398875 / 2, 1.25, p);
    }
  });
  const onHoverScreen = (state: RootState, delta: number) => {
    if (!hoveredScreen) return;

    easing.damp3(state.camera.position, p, 0.5, delta);
    easing.dampQ(state.camera.quaternion, q, 0.4, delta);
  };

  return { onHoverScreen };
}

export default useHoverScreen;
