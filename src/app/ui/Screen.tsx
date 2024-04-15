import React from 'react';
import useComputers from '@/app/lib/hooks/useComputers';
import { RenderTexture } from '@react-three/drei';
import MonitorMesh from '@/app/ui/MonitorMesh';
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';

export interface IScreen extends React.PropsWithChildren<React.JSX.IntrinsicElements['group']> {
  screenRef: React.RefObject<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>;
  frameId: string;
  panelId: string;
}

function Screen({ screenRef, frameId, panelId, children, ...props }: IScreen) {
  const { frame, panel, materials } = useComputers(frameId, panelId);

  return (
    <group {...props}>
      <MonitorMesh geometry={frame?.geometry} material={materials.Texture} />
      <mesh ref={screenRef} geometry={panel?.geometry}>
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
