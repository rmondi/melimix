export type LetterType = {
  value?: string;
  direction?: string;
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

export type SelectedLettersType = number[] | [];

export const SelectedLettersDefault = [];

export type PreviousLetterType = number | null;

export const PreviousLetterDefault = null;

export type dataType = {
  words: string[];
} 