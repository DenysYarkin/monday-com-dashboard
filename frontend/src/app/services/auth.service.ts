import {inject, Injectable} from '@angular/core';
import { OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenService} from "./token.service";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oAuthService = inject(OAuthService)
  private http: HttpClient = inject(HttpClient);
  private tokenService = inject(TokenService);

  constructor() {
    this.oAuthService.setupAutomaticSilentRefresh();

    this.oAuthService.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.error(event);
      } else {
        console.warn(event);
      }
    });
  }

  async getToken(authCode: string): Promise<boolean> {
    const tokenEndpoint = `${environment.backendApiUri}/api/get-access-token`;

    const params = new URLSearchParams();
    params.append('code', authCode);
    let result = true;
    const response = await axios.get(tokenEndpoint + '?' + params.toString())
      .then(response => {
        this.tokenService.saveToken(response.data.token);
      })
      .catch(error => {
        result = false;
        console.error('Error while fetching token:', error)
      })
    return false;
  }
}
