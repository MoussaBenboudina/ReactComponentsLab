import { useEffect } from "react";

type props = {
  time: number;
  setTime: (value: (prev: number) => number) => void;
};

const Timer = ({ time, setTime }: props) => {
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [time]);

  return (
    <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white border-gray-500 border-4">
      <span
        className={`${
          time < 10 ? "text-red-500 font-bold animate-fadeInOut" : "text-black"
        } text-xl`}
      >
        {time < 10 ? `0${time}` : time}
      </span>
    </div>
  );
};

export default Timer;
