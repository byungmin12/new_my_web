import React from 'react';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

interface GLTFResult extends GLTF {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material | THREE.Material[];
  };
}

function useComputers(frameId?: string, panelId?: string) {
  const { nodes, materials } = useGLTF('/computers_1-transformed (1).glb') as unknown as GLTFResult;
  return {
    nodes: nodes,
    materials: materials,
    frame: frameId ? nodes[frameId] : undefined,
    panel: panelId ? nodes[panelId] : undefined,
  };
}

useGLTF.preload('/computers_1-transformed (1).glb');
export default useComputers;
