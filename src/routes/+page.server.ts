import type { PageServerLoad } from './$types'

import { getIds, getBoard, getLikes } from "../db";
import type { IBoard } from "src/types";

type OutputType = { 
    board: IBoard,
    likes: Record<string, number>,
    ids: string[]
 }


export const load: PageServerLoad<OutputType> = async () => {
  const ids = await getIds();
  const randomBoard = ids[Math.floor(Math.random() * ids.length)];
  const [board, likes] = await Promise.all([getBoard(randomBoard), getLikes()]);

  return {
      board,
      ids,
      likes,
  };

}