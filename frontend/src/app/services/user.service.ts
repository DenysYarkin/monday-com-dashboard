import { Injectable } from '@angular/core';
import {UserInfo} from "../interfaces/userInfo";
import axios from "axios";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserInfo(accessToken: string): Promise<UserInfo> {
    const response = await axios.get(
      `${environment.backendApiUri}/api/get-user-info`,
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
