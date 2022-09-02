export interface IItem {
  text: string;
  categoryId: string;
}
export interface IClues {
  [categoryId: string]: string;
}

export interface IAnswers {
  [categoryId: string]: string[];
}
export interface IBoard {
  id: string;
  items: IItem[];
  answers: IAnswers;
  clues?: IClues;
}

export enum AnswerState {
  Matched,
  Answered,
}
export interface IAnswer {
  categoryId: string;
  state: AnswerState;
}

export interface ILikes {
  [boardId: string]: { likes: number };
}
