import React from 'react';
import useComputers from '@/app/lib/hooks/useComputers';
import { RenderTexture } from '@react-three/drei';
import MonitorMesh from '@/app/ui/MonitorMesh';

export interface IScreen extends React.PropsWithChildren<React.JSX.IntrinsicElements['group']> {
  frameId: string;
  panelId: string;
}

function Screen({ frameId, panelId, children, ...props }: IScreen) {
  const { frame, panel, materials } = useComputers(frameId, panelId);

  return (
    <group {...props}>
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
