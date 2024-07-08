import {Component, inject, OnInit} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  isLoggedIn = false;
  tokenService: TokenService = inject(TokenService);

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.tokenService.getAccessToken()) {
      this.isLoggedIn = true;
    }
  }

  onLoginClicked() {
    this.router.navigate(['/login']);
  }

  onLogoutClicked() {
    this.tokenService.clearToken();
    window.location.reload();
  }
}
