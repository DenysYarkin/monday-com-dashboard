import { Injectable } from '@angular/core';
import {Board} from "../interfaces/board";
import axios from "axios";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  async getAllBoards(accessToken: string): Promise<Board[]> {
    const response = await axios.get(
      `${environment.backendApiUri}/api/get-boards`,
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
      `${environment.backendApiUri}/api/create-item`,
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
