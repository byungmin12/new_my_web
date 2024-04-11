import React from 'react';
import useComputers from '@/app/lib/hooks/useComputers';
import MonitorMesh from '@/app/ui/MonitorMesh';

interface IMonitor
  extends React.PropsWithChildren<React.JSX.IntrinsicElements['group']> {
  frameId: string;
  panelId: string;
}

function Monitor({ frameId, panelId, ...props }: IMonitor) {
  const { frame, panel, materials } = useComputers(frameId, panelId);
  return (
    <group {...props}>
      <MonitorMesh geometry={frame?.geometry} material={materials.Texture} />
      <MonitorMesh geometry={panel?.geometry} material={materials.Screen} />
    </group>
  );
}

export default Monitor;
