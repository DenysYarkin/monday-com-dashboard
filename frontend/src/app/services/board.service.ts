import { Injectable } from '@angular/core';
import {Board} from "../interfaces/board";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  // TODO: use Option<Board[]>
  async getAllBoards(accessToken: string): Promise<Board[]> {
    const response = await axios.get(
      'http://localhost:3000/api/get-boards',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data.boards
  }

  async createItem(boardId: string, itemName: string, accessToken: string): Promise<boolean> {
    const response = await axios.post(
      'http://localhost:3000/api/create-item',
      {
        boardId: boardId,
        itemName: itemName
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return true;
  }
}
