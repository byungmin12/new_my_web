import React from 'react';

interface IMonitorMesh
  extends React.PropsWithChildren<React.JSX.IntrinsicElements['mesh']> {}

function MonitorMesh({ ...props }: IMonitorMesh) {
  return <mesh castShadow={true} receiveShadow={true} {...props} />;
}

export default MonitorMesh;
