import "./style.css";

type Props = {
  id: number;
  url: string;
  flippedCards: number[];
  matchedCards: number[];
};

const Card = ({ id, url, flippedCards, matchedCards }: Props) => {
  return (
    <div className="relative w-16 h-16 lg:w-24 lg:h-24 xl:w-24 xl:h-24">
      <div
        className={`preserve-3d w-full h-full absolute transition-transform  duration-500 ${
          flippedCards.includes(id) || matchedCards.includes(id)
            ? ""
            : "rotate180"
        } `}
      >
        <div
          className={`${
            matchedCards.includes(id) ? "bg-green-300" : "bg-white"
          } card-front backface-visibility w-full h-full absolute flex justify-center items-center shadow-xl rounded-md cursor-pointer`}
        >
          <img src={url} alt="" width={60} height={60} />
        </div>
        <div className="card-back backface-visibility rotateY180 w-full h-full absolute flex justify-center items-center bg-gray-500 text-5xl bold shadow-xl rounded-md hover:text-red-500 cursor-pointer ">
          <h2>?</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
