import React, { useRef } from 'react';
import useHoverScreenStore from '@/app/lib/states/hoverScreen';
import { Group } from 'three';
import { ThreeEvent } from '@react-three/fiber';
import useComputers from '@/app/lib/hooks/useComputers';
import { hoverAnimationTime, hoverRouterScreenName } from '@/app/lib/config/const';

function useHook() {
  const ref = useRef<Group>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const { addHoverScreen, removeHoverScreen } = useHoverScreenStore();
  const { nodes, appliances, monitors, materials } = useComputers();
  const preventAnimation = () => {
    hoverTimeout.current = setTimeout(() => {
      hoverTimeout.current = null;
    }, hoverAnimationTime);
  };

  const isPreventPointerEvent = (objectName?: string) => {
    const mesh = ref.current?.getObjectByName(hoverRouterScreenName);

    return !!(objectName !== mesh?.name || !mesh || hoverTimeout.current);
  };

  const onPointerOver = (event: ThreeEvent<PointerEvent>) => {
    if (isPreventPointerEvent(event.object.parent?.name)) return;

    addHoverScreen(event.object.parent as Group);

    preventAnimation();
  };
  const onPointerOut = (event: ThreeEvent<PointerEvent>) => {
    if (isPreventPointerEvent(event.object.parent?.name)) return;

    removeHoverScreen();

    preventAnimation();
  };

  return {
    ref,
    nodes,
    appliances,
    monitors,
    materials,
    onPointerOver,
    onPointerOut,
  };
}

export default useHook;
