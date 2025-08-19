 import React, { useEffect } from 'react'
 const StarryRain = () => {
      useEffect(() => {
        // Set CSS custom property for document height
        const updateDocHeight = () => {
          const docHeight = document.documentElement.scrollHeight;
          document.documentElement.style.setProperty('--doc-height', `${docHeight - window.innerHeight}px`);
        };
        updateDocHeight();
        window.addEventListener('resize', updateDocHeight);

        // Cleanup
        return () => {
          window.removeEventListener('resize', updateDocHeight);
        };
      }, []);

      const stars = Array.from({ length: 100 }, (_, index) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.5;

        return (
          <div
            key={index}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity,
            }}
          />
        );
      });

      return <div className="w-full min-h-screen relative">{stars}</div>;
    };

export default StarryRain;