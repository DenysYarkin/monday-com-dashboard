import {Component, inject, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  oAuthUrl: string = environment.oAuthUrlBase +
    `client_id=${environment.clientId}&` +
    `redirect_uri=${environment.oAuthRedirectUri}`;

  tokenService: TokenService = inject(TokenService);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const optionalToken = this.tokenService.getAccessToken();
    if (optionalToken == undefined) {
      window.location.href = this.oAuthUrl
    }
    else {
      this.router.navigate(['/dashboard'])
    }
  }

}
