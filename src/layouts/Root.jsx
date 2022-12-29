import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

export const LayoutContext = React.createContext({
  navAnimate: false,
  breakpoint: "",
  navOpen: true,
  navDocked: true,
  isMobile: false,
  navWidth: 256,
  theme: "light",
  setNavOpen: () => {},
  setNavDocked: () => {},
});

const Root = ({ children }) => {
  const { isMobile, breakpoint } = useWindowSize();
  const navStatus = localStorage.getItem("navOpen") === "true";

  const [navAnimate, setNavAnimate] = useState(false);
  const [navOpen, setNavOpen] = useState(navStatus);
  const [navDocked, setNavDocked] = useState(true);

  function setNav(state) {
    setNavOpen(state || !navOpen);
    localStorage.setItem("navOpen", state || !navOpen);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Genereate desired Layout state here.
  const layout = {
    navAnimate,
    breakpoint,
    isMobile,
    navOpen,
    navDocked,
    navWidth: 256,
    theme: "light",
    setNavOpen: setNav,
    setNavDocked,
  };

  return (
    <LayoutContext.Provider value={layout}>
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};

export default Root;
