import { useEffect, useState } from "react";

function useIsTop(threshold: number) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsTop(window.pageYOffset <= threshold);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isTop;
}

export default useIsTop;
