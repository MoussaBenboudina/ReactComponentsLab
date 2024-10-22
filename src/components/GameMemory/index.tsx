import { Data, data } from "./data";
import Card from "./Card";
import { useState, useEffect } from "react";

const GameMemory = () => {
  const [items, setItems] = useState<Data[]>([]);
  const [clickedCards, setClickedCards] = useState<number>(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [move, setMove] = useState<number>(0);

  useEffect(() => {
    setItems(shuffleArray(data));
  }, []);

  const handleClick = (id: number) => {
    if (
      clickedCards >= 2 ||
      matchedCards.includes(id) ||
      flippedCards.includes(id)
    )
      return;

    setClickedCards((prev) => prev + 1);
    setFlippedCards((prev) => [...prev, id]);

    if (clickedCards === 1) {
      const delay = 900;

      setTimeout(() => {
        const firstCardName = data.find((e) => e.id === flippedCards[0])?.name;
        const secondCardName = data.find((e) => e.id === id)?.name;

        if (firstCardName === secondCardName) {
          setMatchedCards((prev) => [...prev, flippedCards[0], id]);
        }

        setFlippedCards([]);
        setClickedCards(0);
      }, delay);
      setMove((prev) => prev + 1);
    }
  };

  const reset = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setMove(0);
    setItems(shuffleArray(data));
  };

  return (
    <div className="w-full h-screenbg-purple-500 flex  flex-col justify-center items-center">
      <div className="flex gap-4 justify-center items-center mb-6 bg-orange-400 rounded-lg px-4 py-2 shadow-md">
        {" "}
        <h1>{matchedCards.length / 2} / 10</h1>
        <h1 className="w-20">Moves : {move}</h1>
        <button
          className="w-fit px-4 py-1 rounded-md shadow-lg bg-purple-400 hover:bg-purple-500"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <div className="w-[800px] bg-orange-500 flex flex-wrap gap-4 p-4 rounded-lg justify-center items-center">
        {items.map((card) => (
          <div key={card.id} onClick={() => handleClick(card.id)}>
            <Card
              id={card.id}
              url={card.url}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const shuffleArray = (array: Data[]): Data[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default GameMemory;
