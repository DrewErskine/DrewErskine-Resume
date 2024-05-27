// src/hooks/useActiveHash.ts
import { useState, useEffect } from 'react';

const useActiveHash = () => {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set the initial hash value
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeHash;
};

export default useActiveHash;
