import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface IDog {
  position?: [number, number, number];
}

function Dog({ position = [0, 0, 0] }: IDog) {
  const group = useRef(null);
  const { nodes, animations } = useGLTF('/Rover1.glb', true);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Show?.setLoop(THREE.LoopOnce, 1);
    actions.Show?.play();
    actions.Idle?.play();
  }, [actions]);

  const handleClickAnimation = () => {
    const randomAnimationIndex = Math.floor(Math.random() * animations.length);
    const randomAnimationName = animations[randomAnimationIndex].name;
    if (actions[randomAnimationName] != null) {
      actions[randomAnimationName]!.setLoop(THREE.LoopOnce, 1);
      actions[randomAnimationName]!.reset().play();
      actions.Idle?.play();
    }
  };

  return (
    <group
      ref={group}
      position={position}
      dispose={null}
      onClick={handleClickAnimation}
    >
      <group>
        <group name='Geometry'>
          <group name='Rover_Props'>
            if(nodes.Rover_travel_bag
            <skinnedMesh
              name='Rover_travel_bag'
              // @ts-ignore
              geometry={nodes.Rover_travel_bag?.geometry}
              // @ts-ignore
              material={nodes.Rover_travel_bag.material}
              // @ts-ignore
              skeleton={nodes.Rover_travel_bag.skeleton}
            />
            <skinnedMesh
              name='Rover_footprint'
              // @ts-ignore
              geometry={nodes.Rover_footprint.geometry}
              // @ts-ignore
              material={nodes.Rover_footprint.material}
              // @ts-ignore
              skeleton={nodes.Rover_footprint.skeleton}
            />
          </group>
          <skinnedMesh
            name='Rover'
            // @ts-ignore
            geometry={nodes.Rover.geometry}
            // @ts-ignore
            material={nodes.Rover.material}
            // @ts-ignore
            skeleton={nodes.Rover.skeleton}
          />
        </group>
        <primitive object={nodes.Root} />
      </group>
    </group>
  );
}

useGLTF.preload('/Rover1.glb');

export default Dog;
