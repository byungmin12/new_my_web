import React, { useRef } from 'react';
import useComputers from '@/app/lib/hooks/useComputers';
import { RenderTexture } from '@react-three/drei';
import MonitorMesh from '@/app/ui/MonitorMesh';
import { Group } from 'three';

export interface IScreen extends React.PropsWithChildren<React.JSX.IntrinsicElements['group']> {
  frameId: string;
  panelId: string;
  onHoverScreen: (screen: Group) => void;
}

function Screen({ frameId, panelId, children, onHoverScreen, ...props }: IScreen) {
  const groupRef = useRef<Group>(null);
  const { frame, panel, materials } = useComputers(frameId, panelId);

  return (
    <group {...props} ref={groupRef} onPointerOver={() => onHoverScreen(groupRef.current!)}>
      <MonitorMesh geometry={frame?.geometry} material={materials.Texture} />
      <mesh geometry={panel?.geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach='map' anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default Screen;
