import data from "./Data";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleClick = (id: string) => {
    setSelected(id === selected ? null : id);

    let cpyMultiple: string[] = [...multiple];

    if (cpyMultiple.includes(id)) {
      cpyMultiple = cpyMultiple.filter((e) => e !== id);
    } else {
      cpyMultiple.push(id);
    }

    setMultiple(cpyMultiple);
  };

  return (
    <>
      <div className="accordion flex px-2 items-center gap-2 flex-col w-full min-h-screen text-black bg-white ">
        <div className="">Challenge 1: Accordion</div>
        <button
          className={`${
            multiple.length
              ? "bg-orange-400"
              : "bg-gray-500 pointer-events-none"
          } w-fit px-6 py-4 flex justify-center items-center h-6 bg-gray-300 text-[18px] rounded-md shadow-xl m-6 hover:bg-orange-500`}
          onClick={() => setMultiple([])}
        >
          Close Elements
        </button>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={item.id}
              className={`overflow-hidden transition-all duration-500 ease-linear w-full sm:w-full md:w-1/2 xl:w-1/2 p-1 cursor-pointer  border flex items-center flex-col text-center rounded-md shadow-lg gap-1`}
              onClick={() => handleClick(item.id)}
            >
              <span
                className={`text-[16px] flex justify-between w-full items-center px-6 `}
              >
                {item.title}
                <span
                  className={`text-sm p-1 transition-transform duration-1000 ${
                    multiple.includes(item.id) ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {index % 2 === 0 ? <FaAngleDown /> : <FaPlus />}
                </span>
              </span>
              <div
                className={`transition-[max-height] duration-700 ease-in-out ${
                  multiple.includes(item.id) ? "max-h-96" : "max-h-0"
                }`}
              >
                <span
                  className={`block transition-opacity duration-700 ease-in-out ${
                    multiple.includes(item.id) ? "opacity-100" : "opacity-0"
                  } text-[14px] px-2 text-gray-800`}
                  style={{
                    transitionDelay: multiple.includes(item.id)
                      ? "0ms"
                      : "500ms",
                  }}
                >
                  {item.text}
                </span>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-red-600">Data not found</h2>
        )}
      </div>
    </>
  );
};

export default Accordion;
