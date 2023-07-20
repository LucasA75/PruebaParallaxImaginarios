import { useState, useEffect } from "react";

const useScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth, screenHeight };
};

export default useScreenDimensions;
