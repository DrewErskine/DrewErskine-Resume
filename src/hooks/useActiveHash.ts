// src/hooks/useActiveHash.ts
import { useState, useEffect, useCallback, useRef } from 'react';

const useActiveHash = () => {
  const [activeHash, setActiveHash] = useState('');
  
  // Use a ref to track the current active hash to avoid dependency issues
  const activeHashRef = useRef(activeHash);
  activeHashRef.current = activeHash;

  // Use useCallback with the ref to prevent recreating this function on each render
  const updateActiveHash = useCallback((newHash: string) => {
    if (newHash && newHash !== activeHashRef.current) {
      setActiveHash(newHash);
    }
  }, []); // Empty dependency array since we're using a ref

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        updateActiveHash(window.location.hash);
      }
    };

    // Set the initial hash value if present in URL
    handleHashChange();

    // Listen for hash changes (when clicking nav links)
    window.addEventListener('hashchange', handleHashChange);

    // Function to determine which section is most visible in the viewport
    const handleScroll = () => {
      // Only run this if we're not in the middle of a hash change navigation
      if (performance.now() - lastNavTime < 1000) return;

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      let maxVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible (as a percentage of its height)
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const sectionHeight = rect.height;
        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;
        
        // Consider the section position - give higher weight to sections near the top of the viewport
        const positionFactor = 1 - Math.min(Math.max(rect.top, 0) / windowHeight, 1);
        const adjustedVisibility = visibilityPercentage * positionFactor;

        if (adjustedVisibility > maxVisibility && visibleHeight > 0) {
          maxVisibility = adjustedVisibility;
          currentSection = `#${section.id}`;
        }
      });

      if (currentSection) {
        updateActiveHash(currentSection);
        
        // Optionally update the URL hash without triggering scroll
        // Uncomment if you want the URL to update as user scrolls
        // window.history.replaceState(null, '', currentSection);
      }
    };

    // Track the last time we changed the hash via clicking a nav link
    let lastNavTime = 0;
    const trackNavClick = () => {
      lastNavTime = performance.now();
    };
    window.addEventListener('hashchange', trackNavClick);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check on mount
    setTimeout(handleScroll, 100);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('hashchange', trackNavClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateActiveHash]); // Only depend on the stable updateActiveHash function

  return activeHash;
};

export default useActiveHash;
