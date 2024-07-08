import {Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  // TODO: logout

  onLoginClicked() {
    this.router.navigate(['/login']);
  }
}
