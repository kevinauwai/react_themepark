    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the window
      }, [pathname]); // Re-run effect whenever the pathname changes

      return null; // This component doesn't render any visible elements
    }

    export default ScrollToTop;