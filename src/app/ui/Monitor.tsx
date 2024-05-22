import React from 'react';
import MonitorMesh from '@/app/ui/MonitorMesh';
import { TMesh, TMeterial } from '@/app/lib/types/type';

export interface IMonitor extends React.PropsWithChildren<React.JSX.IntrinsicElements['group']> {
  frame: TMesh;
  panel: TMesh;
  materials: TMeterial;
}

function Monitor({ frame, panel, materials, ...props }: IMonitor) {
  return (
    <group {...props}>
      <MonitorMesh geometry={frame?.geometry} material={materials.Texture} />
      <MonitorMesh geometry={panel?.geometry} material={materials.Screen} />
    </group>
  );
}

export default Monitor;
