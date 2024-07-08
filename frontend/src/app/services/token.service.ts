import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  clearToken() {
    try {
      localStorage.removeItem('accessToken');
    }
    catch (error) {
      console.log('accessToken is not present');
    }
  }

  getAccessToken(): string | undefined {
    const token: string | null = localStorage.getItem('accessToken');
    if (token) {
      return token as string;
    }
    return undefined;
  }
}
