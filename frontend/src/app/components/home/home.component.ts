import {Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authService: AuthService = inject(AuthService);

  // TODO: rewrite
  oAuthUrl: String = "https://auth.monday.com/oauth2/authorize?" +
    `client_id=${environment.clientId}&` +
    `redirect_uri=${"http://localhost:4200/callback"}`;
}
