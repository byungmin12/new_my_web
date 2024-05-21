import React from 'react';
import { Html } from '@react-three/drei';
import { HtmlProps } from '@react-three/drei/web/Html';

interface ITooltip extends HtmlProps {
  children: React.ReactNode;
  isHover?: boolean;
}

function Tooltip({ children, isHover = true, ...props }: ITooltip) {
  return (
    <Html {...props}>
      <div className={`annotation ${isHover ? 'visible' : ''}`}>{children}</div>
      <style jsx>{`
        .annotation {
          transition:
            opacity 0.5s ease 0.5s,
            transform 0.5s ease 0.5s;
          opacity: 0;
          pointer-events: none;
        }

        .annotation.visible {
          opacity: 1;
        }
      `}</style>
    </Html>
  );
}

export default Tooltip;
