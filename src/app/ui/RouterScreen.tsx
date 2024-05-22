import React from 'react';
import Screen, { IScreen } from '@/app/ui/Screen';
import { PerspectiveCamera } from '@react-three/drei';
import { hoverRouterScreenName } from '@/app/lib/config/const';

interface IRouterScreen extends IScreen {
  children: React.ReactNode;
  color?: string;
  annotation?: React.ReactNode;
  annotationPosition?: [number, number, number];
  annotationFactor?: number;
}

function RouterScreen({ children, annotation, color = 'orange', annotationPosition, annotationFactor, ...props }: IRouterScreen) {
  return (
    <Screen {...props} name={hoverRouterScreenName} onPointerOver={() => {}}>
      <PerspectiveCamera makeDefault manual aspect={1} position={[0, 0, 10]} />
      <color attach='background' args={['orange']} />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      {children}
      {/*<Tooltip isHover={isHover} distanceFactor={annotationFactor ?? 20} position={annotationPosition ?? [1.8, 3, -3]}>*/}
      {/*  {annotation}*/}
      {/*</Tooltip>*/}
    </Screen>
  );
}

export default RouterScreen;
