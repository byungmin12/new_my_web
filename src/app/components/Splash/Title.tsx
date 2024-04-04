import React from 'react';
import { Text3D, useMatcapTexture } from '@react-three/drei';

interface ITitle {
  position?: [number, number, number];
}

function Title({ position = [0, 0, 0] }: ITitle) {
  const [matcapTexture] = useMatcapTexture('E8E8DE_B5B5A6_CCCCBC_C4C4BA');

  return (
    <group position={position} dispose={null}>
      <Text3D
        font={'../Ownglyph_font.json'}
        lineHeight={0.7}
        bevelSize={0.08}
        bevelThickness={0.03}
      >
        {`Hello \nWorld!`}
        <meshMatcapMaterial color='white' matcap={matcapTexture} />
      </Text3D>
    </group>
  );
}

export default Title;
