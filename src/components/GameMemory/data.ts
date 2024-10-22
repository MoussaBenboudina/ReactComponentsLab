import butterfly from "./imgs/butterfly.png";
import cow from "./imgs/cow.png";
import crab from "./imgs/crab.png";
import dog from "./imgs/dog.png";
import dolphin from "./imgs/dolphin.png";
import jellyfish from "./imgs/jellyfish.png";
import lion from "./imgs/lion.png";
import snail from "./imgs/snail.png";
import squirrel from "./imgs/squirrel.png";
import dinosaur from "./imgs/dinosaur.png";

export type Data = {
  id: number;
  name: string;
  url: string;
};
export const data: Data[] = [
  { id: 1, name: "butterfly", url: butterfly },
  { id: 2, name: "butterfly", url: butterfly },
  { id: 3, name: "cow", url: cow },
  { id: 4, name: "cow", url: cow },
  { id: 5, name: "crab", url: crab },
  { id: 6, name: "crab", url: crab },
  { id: 7, name: "dog", url: dog },
  { id: 8, name: "dog", url: dog },
  { id: 9, name: "dolphin", url: dolphin },
  { id: 10, name: "dolphin", url: dolphin },
  { id: 11, name: "jellyfish", url: jellyfish },
  { id: 12, name: "jellyfish", url: jellyfish },
  { id: 13, name: "lion", url: lion },
  { id: 14, name: "lion", url: lion },
  { id: 15, name: "snail", url: snail },
  { id: 16, name: "snail", url: snail },
  { id: 17, name: "squirrel", url: squirrel },
  { id: 18, name: "squirrel", url: squirrel },
  { id: 19, name: "dinosaur", url: dinosaur },
  { id: 20, name: "dinosaur", url: dinosaur },
];
