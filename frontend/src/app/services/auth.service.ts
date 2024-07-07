import {inject, Injectable} from '@angular/core';
import {AuthConfig, OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oAuthService = inject(OAuthService)
  private http: HttpClient = inject(HttpClient);

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
    const tokenEndpoint = `http://localhost:3000/api/get-access-token`;

    const params = new URLSearchParams();
    params.append('code', authCode);
    let result = true;
    fetch(tokenEndpoint + '?' + params.toString())
        .then(response => response.json())
        .then(data => {
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken);
        })
        .catch(error => {
          result = false;
          console.error('Error:', error)
        });
    return result;
  }
}
