import { Injectable } from '@angular/core';
import {UserInfo} from "../interfaces/userInfo";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // TODO: use Option<Board[]>
  async getUserInfo(accessToken: string): Promise<UserInfo> {
    const response = await axios.get(
      'http://localhost:3000/api/get-user-info',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data.user
  }
}
