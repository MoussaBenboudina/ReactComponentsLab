import { useState } from "react";
import { calculateWinner } from "./calculateWinner";

const TicTacToe = () => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const [next, setNext] = useState<"x" | "o">("x");
  const [scoreX, setScoreX] = useState<number>(0);
  const [scoreY, setScoreY] = useState<number>(0);

  const handleClick = (index: number) => {
    const cpySquares = squares;
    if (cpySquares[index] === null) {
      cpySquares[index] = next === "x" ? "o" : "x";
      setNext(next === "x" ? "o" : "x");
      setSquares(cpySquares);
    }

    if (
      squares.every(
        (square) => square !== null && calculateWinner(squares) === null
      )
    ) {
      reset();
    }

    if (calculateWinner(squares) !== null) {
      if (calculateWinner(squares)?.Winner === "x") {
        setScoreX(scoreX + 1);
        reset();
      } else {
        setScoreY(scoreY + 1);
        reset();
      }
    }
  };

  const reset = (): void => {
    const delay = 2000;
    setTimeout(() => {
      setSquares(Array(9).fill(null));
    }, delay);
  };

  return (
    <>
      <div
        className={`flex justify-center items-center w-full h-screen flex-col gap-2 bg-purple-500`}
      >
        <div className="text-gray-100">Tic Tac Toe </div>
        <div className="text-md  rounded-md shadow-lg bg-gray-500 w-60 h-8 flex justify-center items-center">
          next player : <span>{next == "x" ? "o" : "x"}</span>
        </div>
        <div className="text-md    w-60 h-8 flex justify-around items-center gap-4">
          <span className="w-1/2 bg-gray-500 rounded-md h-8 gap-8 shadow-lg flex justify-center items-center">
            X:{scoreX < 10 ? String(`0${scoreX}`) : scoreX}
          </span>
          <span className="w-1/2 bg-gray-500 rounded-md  h-8  shadow-lg  flex justify-center items-center">
            O:{scoreY < 10 ? String(`0${scoreY}`) : scoreY}
          </span>
        </div>
        <div
          className={`flex flex-wrap w-64 h-64 mt-8 ${
            calculateWinner(squares)?.Winner != null
              ? "pointer-events-none"
              : ""
          }`}
        >
          {squares.map((square, index) => (
            <div
              key={index}
              className={`${
                calculateWinner(squares)?.indexs.includes(index)
                  ? "bg-green-400"
                  : ""
              } w-20 h-20 flex justify-center items-center m-0.5 rounded-md  cursor-pointer hover:bg-red-400 text-3xl bg-gray-900`}
              onClick={() => handleClick(index)}
            >
              {square}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
