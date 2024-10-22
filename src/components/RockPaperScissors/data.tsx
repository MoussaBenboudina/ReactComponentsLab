import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

export type GameOption = "rock" | "paper" | "scissors";

export type optionsProps = {
  id: string;
  name: GameOption | null;
  icon: JSX.Element;
}[];

export const options: optionsProps = [
  {
    id: "1",
    name: "rock",
    icon: <FaHandRock />,
  },
  {
    id: "2",
    name: "paper",
    icon: <FaHandPaper />,
  },
  {
    id: "3",
    name: "scissors",
    icon: <FaHandScissors />,
  },
];
