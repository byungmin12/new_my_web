'use client';

import { Canvas } from '@react-three/fiber';

import {
  ContactShadows,
  Environment,
  PresentationControls,
} from '@react-three/drei';
import Title from '@/app/components/Splash/Title';
import Dog from '@/app/components/Splash/Dog';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
          <ambientLight />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 10, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Dog position={[0, -0.8, 0]} />
            <Title position={[-1.5, 1, -2]} />
          </PresentationControls>
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.75}
            scale={10}
            blur={3}
            far={4}
          />
          <Environment preset='city' />
          <pointLight position={[0, 0, 5]} intensity={100} />
          <color attach='background' args={['#AAB8F5']} />
        </Canvas>
      </div>
    </main>
  );
}
