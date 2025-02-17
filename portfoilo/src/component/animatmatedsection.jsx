import React, { useState, useEffect, useRef } from 'react';

const FadeInOverlay = ({
  startScroll = 100, // Scroll position to start fading in (pixels)
  endScroll = 500,   // Scroll position to fully fade in (pixels)
  backgroundColor = 'rgba(0, 0, 0, 0.8)', // Default background color (semi-transparent black)
  zIndex = 10,       // Ensure overlay is on top
  children,          // Optional content to render behind the overlay
  className = '',    // Allow custom CSS classes
  style = {},        // Allow inline styles
}) => {
  const [opacity, setOpacity] = useState(0);
  const overlayRef = useRef(null); // Ref to the overlay div (optional, for direct DOM manipulation if needed)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate opacity based on scroll position within the fade-in range
      let calculatedOpacity = 0;
      if (scrollY >= startScroll && scrollY <= endScroll) {
        const scrollRange = endScroll - startScroll;
        const scrolledAmount = scrollY - startScroll;
        calculatedOpacity = scrolledAmount / scrollRange;
      } else if (scrollY > endScroll) {
        calculatedOpacity = 1; // Fully opaque after endScroll
      }

      setOpacity(calculatedOpacity);
    };

    // Initial opacity calculation on mount (in case of initial scroll position)
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [startScroll, endScroll]); // Re-run effect if startScroll or endScroll props change

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor,
    opacity: opacity,
    pointerEvents: 'none', // Allow clicks to pass through the overlay
    zIndex: zIndex,
    transition: 'opacity 0.5s ease-in-out', // Smooth fade-in transition
    ...style, // Apply any custom inline styles
  };

  return (
    <div className={`fade-in-overlay ${className}`} style={overlayStyles} ref={overlayRef}>
      {children} {/* Render any children behind the overlay */}
    </div>
  );
};

export default FadeInOverlay;