import {Component, inject, Input, OnInit} from '@angular/core';
import {UserInfo} from "../../interfaces/userInfo";
import {UserService} from "../../services/user.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {

  userService = inject(UserService);
  tokenService = inject(TokenService);

  public userInfo: UserInfo = {
    id: "",
    name: "",
    email: ""
  };

  async ngOnInit() {
    const optionalToken: string | undefined = this.tokenService.getAccessToken();
    let accessToken: string = '';
    if (optionalToken) {
      accessToken = optionalToken.toString();
    }
    else {
      console.log('Error: can\'t fetch documents: unauthorized')
      return;
    }
    try {
      this.userInfo = await this.userService.getUserInfo(accessToken);
    }
    catch (error) {
      console.log("Failed to fetch user info:", error);
    }
  }

  constructor() {}
}
