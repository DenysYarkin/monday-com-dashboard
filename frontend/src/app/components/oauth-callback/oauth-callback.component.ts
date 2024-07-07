import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  imports: [],
  templateUrl: './oauth-callback.component.html',
  styleUrl: './oauth-callback.component.css'
})
export class OauthCallbackComponent implements OnInit {

  authService: AuthService = inject(AuthService);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // TODO: add check for the case when we already have a token
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params['code'];
      // TODO: remove logs
      console.log('code:', code);
      this.authService.getToken(code)
    });
    this.router.navigate(['/boards']);  }
}
