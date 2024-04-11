'use client';

import { Canvas } from '@react-three/fiber';
import { BakeShadows, MeshReflectorMaterial } from '@react-three/drei';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';
import Computers from '@/app/ui/Computers';

export default function Home() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 45, near: 1, far: 20 }}
      eventPrefix='client'
    >
      {/* Lights */}
      <color attach='background' args={['black']} />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Computers />
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#202020'
            metalness={0.8}
            mirror={0}
          />
        </mesh>
        <pointLight
          distance={1.5}
          intensity={1}
          position={[-0.15, 0.7, 0]}
          color='orange'
        />
      </group>
      {/* Postprocessing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={5}
        />
        <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.3}
          bokehScale={15}
          height={700}
        />
      </EffectComposer>
      {/* Camera movements */}
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  );
}
