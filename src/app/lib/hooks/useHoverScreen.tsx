import React, { useEffect } from 'react';
import { easing } from 'maath';
import * as THREE from 'three';
import { RootState } from '@react-three/fiber';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';
import { hoverAnimationTime } from '@/app/lib/config/const';

function useHoverScreen(q = new THREE.Quaternion(), p = new THREE.Vector3()) {
  const { hoveredScreen } = useHoverScreenStore();

  useEffect(() => {
    if (hoveredScreen) {
      hoveredScreen.parent?.parent?.updateWorldMatrix(true, true);
      hoveredScreen.localToWorld(p.set(0, 2 / 2, 4));
      hoveredScreen.getWorldQuaternion(q);
    }
  });
  const onHoverScreen = (state: RootState, delta: number) => {
    if (!hoveredScreen) return;

    easing.damp3(state.camera.position, p, hoverAnimationTime / 1000, delta);
    easing.dampQ(state.camera.quaternion, q, hoverAnimationTime / 1000, delta);
  };

  return { onHoverScreen };
}

export default useHoverScreen;
