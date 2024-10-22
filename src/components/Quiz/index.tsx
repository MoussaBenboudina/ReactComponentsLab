import { useEffect, useState } from "react";
import { data } from "./data";
import Timer from "./timer";

type Question = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
};

const getOptionKey = (index: number): keyof Question => {
  return `option${index}` as keyof Question;
};

const Quiz = () => {
  const [start, setStart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(data[index]);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [correctAns, setCorrectAns] = useState<number>(0);
  const [time, setTime] = useState<number>(60);

  const chekAnswer = (ansIndex: number) => {
    setAnswerIndex(ansIndex);
    if (ansIndex === question.ans) setCorrectAns((prev) => prev + 1);
  };

  const handleClick = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    setQuestion(data[index]);
    setAnswerIndex(null);
  }, [index]);

  const reset = () => {
    setIndex(0);
    setCorrectAns(0);
    setAnswerIndex(null);
    setQuestion(data[0]);
    setTime(60);
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-purple-600 ">
      {start ? (
        <div className="flex flex-col items-center bg-yellow-50 text-black w-64 lg:w-96 md:w-96 rounded-md shadow-lg relative ">
          <div className=" py-2">Quiz App</div>
          <div className="absolute right-1 top-2">
            {" "}
            {time && index < data.length ? (
              <Timer time={time} setTime={setTime} />
            ) : (
              <></>
            )}{" "}
          </div>
          <span className="border-b-2 w-[calc(100%-40px)] text-center border-gray-400"></span>
          {index < data.length && time > 0 ? (
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-black text-[18px]  w-60 lg:w-80 md:w-80">
                {index + 1}, {question.question}
              </h1>

              <ul
                className={`${
                  answerIndex !== null ? "pointer-events-none" : ""
                }`}
              >
                {[1, 2, 3, 4].map((optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`${
                      answerIndex === question.ans &&
                      optionIndex === question.ans
                        ? "bg-green-300"
                        : answerIndex === optionIndex &&
                          answerIndex !== question.ans
                        ? "bg-red-300"
                        : ""
                    } ${
                      optionIndex === question.ans && answerIndex !== null
                        ? "bg-green-400"
                        : ""
                    } flex text-gray-700 items-center  my-2 border-2  border-gray-300 p-2 text-[16px]  w-60 lg:w-80 md:w-80 cursor-pointer rounded-md`}
                    onClick={() => chekAnswer(optionIndex)}
                  >
                    {question[getOptionKey(optionIndex)]}
                  </li>
                ))}
              </ul>

              <button
                className={`${
                  answerIndex === null
                    ? "pointer-events-none bg-purple-300"
                    : "bg-purple-500"
                } w-24  m-2 py-1 text-sm shadow-lg rounded-md text-white hover:bg-purple-700`}
                onClick={handleClick}
              >
                Next
              </button>

              <span className="text-gray-400 text-[14px] mb-4 mt-2">
                {index + 1} of {data.length} question
              </span>
            </div>
          ) : (
            <div className="h-fit py-4  text-gray-700 text-[16px] flex flex-col justify-center items-center gap-2 w-80">
              You Scored {correctAns} out of {data.length}
              <button
                className="bg-purple-500 w-20  text-white p-1.5 rounded-md shadow-lg text-[18px] hover:bg-purple-700"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="">
          <button
            className="text-white bg-green-500 text-[18px] hover:bg-green-600 w-24 h-8 shadow-lg rounded-md"
            onClick={() => setStart(true)}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
