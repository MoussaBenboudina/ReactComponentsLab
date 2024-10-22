import { useState } from "react";
import { options } from "./data";
import { GameOption } from "./data";

const RockPaperScissors = () => {
  const [option, setOption] = useState<JSX.Element | null>(null);
  const [optionComputer, setOptionComputer] = useState<JSX.Element | null>(
    null
  );
  const [scorePlayer, setScorePlayer] = useState<number>(0);
  const [scoreComputer, setScoreComputer] = useState<number>(0);
  const [note, setNote] = useState<string | null>(null);
  const [wins, setWins] = useState<"player" | "computer" | null>(null);
  const handleClick = (name: GameOption | null, icon: JSX.Element) => {
    if (name === null) return;
    setOption(icon);

    const optionComputerRandom = Math.floor(Math.random() * options.length);
    const computerChoice = options[optionComputerRandom].name;
    const computerChoiceIcon = options[optionComputerRandom].icon;
    setOptionComputer(computerChoiceIcon);

    let noteMessage = "";
    console.log(name, ":", computerChoice);

    if (name === computerChoice) {
      noteMessage = "draw";
    } else if (
      (name === "paper" && computerChoice === "rock") ||
      (name === "rock" && computerChoice === "scissors") ||
      (name === "scissors" && computerChoice === "paper")
    ) {
      noteMessage = "Player wins";
      setWins("player");
      setScorePlayer((prev) => prev + 1);
    } else {
      noteMessage = "Computer wins";
      setWins("computer");
      setScoreComputer((prev) => prev + 1);
    }

    setNote(noteMessage);

    setTimeout(() => {
      setOption(null);
      setOptionComputer(null);
      setNote(null);
      setWins(null);
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-center flex-col gap-10 items-center min-h-screen ">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <span
              className={`${
                wins === "player"
                  ? "bg-green-600"
                  : wins === "computer"
                  ? "bg-red-600"
                  : "bg-yellow-500"
              } w-24 h-24 flex justify-center items-center rounded-full shadow-xl`}
            >
              <span className="text-3xl bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center  text-blue-700">
                {option}
              </span>
            </span>
            <span> player :{scorePlayer}</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span
              className={`${
                wins === "computer"
                  ? "bg-green-600"
                  : wins === "player"
                  ? "bg-red-600"
                  : "bg-yellow-500"
              } w-24 h-24 flex justify-center items-center rounded-full shadow-xl`}
            >
              <span className="text-3xl bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue-700">
                {" "}
                {optionComputer}{" "}
              </span>
            </span>
            <span>computer :{scoreComputer}</span>
          </div>
        </div>

        <div className="h-14">{note}</div>
        <div
          className={`${
            option === null ? "" : "pointer-events-none"
          }  flex gap-2`}
        >
          {options.map((item) => (
            <span
              key={item.id}
              onClick={() => handleClick(item.name, item.icon)}
              className={`${
                option === item.name ? "bg-red-500" : "bg-orange-400"
              } w-16 h-16 cursor-pointer  flex justify-center items-center rounded-full hover:bg-orange-600`}
            >
              <span className="text-2xl bg-white text-blue-800 rounded-full p-4">
                {item.icon}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default RockPaperScissors;
