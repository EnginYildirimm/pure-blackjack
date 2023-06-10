import { PlayingCardShapeType, PlayingCardType } from "../types/PlayingCard";

const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const shapes: PlayingCardShapeType[] = ["maca", "karo", "kupa", "sinek"];

const values = {
  A: 11,
  J: 10,
  Q: 10,
  K: 10,
};

export const getDeck = () => {
  const deck = [];
  for (const shape of shapes) {
    for (const rank of ranks)
      deck.push({
        url: `/svg/cards/${shape}/${rank}.svg`,
        // @ts-ignore
        value: values[rank] ? values[rank] : Number(rank),
        shape: shape,
      });   
  }
return deck
};

