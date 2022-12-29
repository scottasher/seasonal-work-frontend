import { useState, useEffect } from "react";

// X-Small	None	<576px
// Small	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px

const breakpoints = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

function useWindowSize(options) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [isMobile, setIsMobile] = useState(false);
  const [breakpoint, setBreakpoint] = useState();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    if (window.innerWidth <= breakpoints.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function handleBreakpoint() {
    const { innerWidth } = window;

    if (innerWidth < breakpoints.xs) return setBreakpoint("xs");
    if (innerWidth >= breakpoints.sm && innerWidth < breakpoints.md) {
      return setBreakpoint("sm");
    }
    if (innerWidth >= breakpoints.md && innerWidth < breakpoints.lg) {
      return setBreakpoint("md");
    }
    if (innerWidth >= breakpoints.lg && innerWidth < breakpoints.xl) {
      return setBreakpoint("lg");
    }
    if (innerWidth >= breakpoints.xl && innerWidth < breakpoints.xxl) {
      return setBreakpoint("xl");
    }
    if (innerWidth >= breakpoints.xxl) {
      return setBreakpoint("xxl");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleBreakpoint);
    handleBreakpoint();
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleBreakpoint);
    };
  }, []);

  return { size: windowSize, isMobile, breakpoint };
}

export default useWindowSize;
