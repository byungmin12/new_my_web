import React from 'react';
import { Text } from '@react-three/drei';

interface ITooltip {
  color?: string;
  left?: string;
  width?: string;
  ref: typeof Text;
}

function Tooltip({ ref, color = 'white', left = '-30px', width = '25px' }: ITooltip) {
  return (
    // <Text ref={ref}>test</Text>
    // <Html distanceFactor={20} position={[0.3, 0.5, -3]} ref={ref}>
    //   <div className='annotation'>
    //     hello <br />
    //     world
    //   </div>
    //   <style jsx>{`
    //     .annotation {
    //       transform: translate3d(calc(-40%), calc(40%), 0);
    //       user-select: none;
    //     }
    //
    //     .annotation::before {
    //       content: '';
    //       position: absolute;
    //       top: 10px;
    //       left: ${left};
    //       height: 2px;
    //       width: ${width};
    //       background: ${color};
    //     }
    //   `}</style>
    // </Html>
  );
}

export default Tooltip;
