import React from 'react';
import { RenderTexture } from '@react-three/drei';
import MonitorMesh from '@/app/ui/MonitorMesh';
import { IMonitor } from '@/app/ui/Monitor';

export interface IScreen extends IMonitor {}

function Screen({ frame, panel, children, materials, ...props }: IScreen) {
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
