import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  // const [scrollPercent , setscrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[6000px] w-full">
      <div className="w-full sticky top-0 mt-2 bg-black  z-10  ">
        <div className="p-2 text-white w-full text-center">
          Scroll Indicator
        </div>
        <div className="bg-gray-400 h-[5px]">
          <div
            className="bg-red-500 h-full"
            style={{ width: `${scrollWidth}%` }}
          ></div>
        </div>
      </div>
      <div className="fixed top-1/2 left-1/2 text-2xl">
        {Math.round(scrollWidth)}%
      </div>
    </div>
  );
};

export default ScrollIndicator;
