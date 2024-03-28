'use client';
import { useEffect, useState } from 'react';
import Blue from '../../public/gradient-blue1.png';
import Image from 'next/image';

const DynamicBgSphere = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);
  // Event handler for the mousemove event.

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      // Update the cursor position based on the mouse coordinates.
      setMousePos({ x: event.clientX, y: event.clientY });

      // Get the target element that the cursor is currently over.
      const target = event.target;

      // Check if the cursor is over a clickable element by inspecting the cursor style.
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <div>
      <Image
        className='transition-all ease-out delay-15'
        style={{
          position: 'absolute',
          opacity: '.75',
          top: mousePos.y,
          left: mousePos.x,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
        src={Blue}
        alt='bg'
        width={400}
        height={400}
      />
    </div>
  );
};

export default DynamicBgSphere;
