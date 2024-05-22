import React from 'react';
import Monitor from '@/app/ui/Monitor';
import MonitorMesh from '@/app/ui/MonitorMesh';
import RouterScreen from '@/app/ui/RouterScreen';
import useHook from '@/app/ui/Computers/useHook';
import { Vector3 } from '@react-three/fiber';

function Computers() {
  const { materials, monitors, appliances, ref, onPointerOut, onPointerOver } = useHook();
  return (
    <group ref={ref} dispose={null} scale={0.5} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      {monitors.map((monitor) => {
        if (monitor.type === 'route') {
          return (
            <RouterScreen
              key={`${monitor.frame.position}${monitor.frame.rotation}`}
              frame={monitor.frame}
              panel={monitor.panel}
              materials={materials}
              position={monitor.position}
              rotation={monitor.rotation}
              scale={monitor.scale}
              annotation={monitor.annotation}
            >
              {monitor.children}
            </RouterScreen>
          );
        }
        return (
          <Monitor
            key={`${monitor.frame.position}${monitor.frame.rotation}`}
            frame={monitor.frame}
            panel={monitor.panel}
            materials={materials}
            position={monitor.position}
            rotation={monitor.rotation}
            scale={monitor.scale}
          />
        );
      })}

      {appliances.map((appliance, index) => (
        <MonitorMesh
          key={index}
          geometry={appliance.geometry}
          material={appliance.material}
          position={appliance.position}
          rotation={appliance.rotation}
          scale={appliance.scale as Vector3}
        />
      ))}
    </group>
  );
}

export default Computers;
