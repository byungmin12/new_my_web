import React, { useRef } from 'react';
import Screen, { IScreen } from '@/app/ui/Screen';
import { Line, PerspectiveCamera, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Line2 } from 'three-stdlib';

interface IRouterScreen extends IScreen {
  children: React.ReactNode;
  color?: string;
}

type TypeText = typeof Text;

function RouterScreen({ children, color = 'orange', ...props }: IRouterScreen) {
  const screenRef = useRef<Mesh>(null);
  const tooltipRef = useRef<Mesh>(null);
  const lineRef = useRef<Line2>(null);

  const position = props.position as unknown as [number, number, number];
  useFrame(() => {
    console.log(screenRef?.current?.position);
    console.log(tooltipRef?.current?.position);
    if (screenRef.current && tooltipRef.current && lineRef.current) {
      const positions = [
        tooltipRef.current.position.x,
        tooltipRef.current.position.y,
        tooltipRef.current.position.z,
        screenRef.current.position.x,
        screenRef.current.position.y,
        screenRef.current.position.z,
      ];
      lineRef.current?.geometry.setPositions(positions);
      // lineRef.current.setPoints(positions);
    }
  });
  return (
    <>
      <Screen screenRef={screenRef} {...props}>
        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
        <color attach='background' args={['orange']} />
        <ambientLight intensity={Math.PI / 2} />
        <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
        <pointLight decay={0} position={[-10, -10, -10]} />
        {/*<SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />*/}
        {children}
      </Screen>
      <Line
        ref={lineRef}
        points={[
          [-2, 0, 0],
          [2, 0, 0],
        ]}
        color='red'
        lineWidth={2}
      />
      <Text ref={tooltipRef} position={[position[0] - 1, position[1] - 0.3, position[2] + 2]}>
        aaaa
      </Text>
    </>
  );
}

export default RouterScreen;
