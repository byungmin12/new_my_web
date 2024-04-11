import React from 'react';
import Screen, { IScreen } from '@/app/ui/Screen';
import { PerspectiveCamera } from '@react-three/drei';

interface IRouterScreen extends IScreen {
  children: React.ReactNode;
  color?: string;
}

function RouterScreen({ children, color = 'orange', ...props }: IRouterScreen) {
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach='background' args={['orange']} />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      {/*<SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />*/}
      {children}
    </Screen>
  );
}

export default RouterScreen;
