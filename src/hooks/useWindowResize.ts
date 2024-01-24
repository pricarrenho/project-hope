import { useState } from "react";

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(
    document.documentElement.clientWidth
  );

  window.addEventListener("resize", () => {
    setWindowSize(document.documentElement.clientWidth);
  });

  return { windowSize };
};
