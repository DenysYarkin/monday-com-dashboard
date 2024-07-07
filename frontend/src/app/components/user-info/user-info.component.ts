import {Component, inject, Input, OnInit} from '@angular/core';
import {UserInfo} from "../../interfaces/userInfo";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {

  userService = inject(UserService);

  // TODO: move placeholders to interface probably
  public userInfo: UserInfo = {
    id: "",
    name: "",
    email: ""
  };

  async ngOnInit() {
    const accessToken = localStorage.getItem('accessToken') || '';
    this.userInfo = await this.userService.getUserInfo(accessToken);
  }

  constructor() {}
}
