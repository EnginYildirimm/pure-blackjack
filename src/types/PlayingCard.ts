export type PlayingCardShapeType = "maca" | "karo" | "sinek" | "kupa";
export type PlayingCardType = {
  url: string;
  value: number;
  shape: PlayingCardShapeType;
};
