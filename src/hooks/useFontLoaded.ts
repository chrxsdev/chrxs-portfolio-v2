import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when fonts are loaded
 * @param timeout - Timeout in milliseconds to wait before assuming fonts are loaded (default: 3000ms)
 * @returns boolean indicating if fonts are loaded
 */
export const useFontLoaded = (timeout: number = 3000): boolean => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const checkFontsLoaded = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        // Check if document.fonts API is available
        if ('fonts' in document) {
          // Wait for all fonts to be ready - this includes web fonts
          await document.fonts.ready;
          setFontsLoaded(true);
        } else {
          // Fallback for older browsers: short delay
          setTimeout(() => setFontsLoaded(true), 100);
        }
      } catch (error) {
        console.warn('Font loading check failed:', error);
        setFontsLoaded(true); // Proceed anyway
      }
    };

    // Set up timeout as fallback
    const timeoutId = setTimeout(() => {
      console.warn(`Font loading timeout reached (${timeout}ms), proceeding anyway`);
      setFontsLoaded(true);
    }, timeout);

    checkFontsLoaded().finally(() => {
      clearTimeout(timeoutId);
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return fontsLoaded;
};

export default useFontLoaded;
