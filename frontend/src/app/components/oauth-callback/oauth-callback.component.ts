import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  imports: [],
  templateUrl: './oauth-callback.component.html',
  styleUrl: './oauth-callback.component.css'
})
export class OauthCallbackComponent implements OnInit {

  authService: AuthService = inject(AuthService);
  tokenService: TokenService = inject(TokenService);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    const optionalToken = this.tokenService.getAccessToken();
    if (optionalToken !== undefined) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params['code'];
      this.handleToken(code);
    });
  }

  private async handleToken(code: string) {
    const result = await this.authService.getToken(code);
    this.router.navigate(['/dashboard']);
  }
}
