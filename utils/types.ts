export type LetterType = {
  value?: string;
  direction?: string;
  isSelected?: boolean;
};

export const LetterDefault = {
  value: "",
  direction: "",
  isSelected: false
};

export type LettersType = LetterType[];

export const LettersDefault = [ LetterDefault ];

export type WordType = string;

export const WordDefault: WordType = "";

export type WordsType = WordType[] | [];

export const WordsDefault: WordsType = [];