import React, { useEffect, useRef } from 'react';
import './style.css';

const CursorInteract = ({ children, ...props }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-interact" {...props}>
      <div className="cursor" ref={cursorRef}></div>
      {children}
    </div>
  );
};

export default CursorInteract;
