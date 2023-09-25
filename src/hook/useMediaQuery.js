import { useState, useEffect } from 'react';

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener('change', handleChange);
    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);
  return matches;
};

//https://juhanajauhiainen.com/posts/how-to-implement-usemediaquery-hook-in-react
// function SomeComponent() {
//   const isMobile = useMediaQuery('min-width: 768px)');
//   return <h1>Browsing with {isMobile ? 'phone' : 'desktop'}</h1>;
// }
