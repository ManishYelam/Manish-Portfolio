import React, { useEffect } from 'react';
import { Typed } from 'react-typed';
import './TypedAnimation.css'

function TypedAnimation() {
  useEffect(() => {
    // Initialize Typed after component mounts
    const typed = new Typed('.typed-element', {
      strings: [
        "A passionate Web Developer",
        "I'm a MERN Stack Web Developer.",
        "I love creating web applications.",
        "Let's build something great together!"
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });

    // Clean up function (optional)
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="typed-container">
      <strong><span className="typed-element"></span></strong>
    </div>
  );
}

export default TypedAnimation;
