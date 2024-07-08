import {Component, inject, OnInit} from '@angular/core';
import {BoardsListComponent} from "../boards-list/boards-list.component";
import {DocumentsListComponent} from "../documents-list/documents-list.component";
import {UserInfoComponent} from "../user-info/user-info.component";
import {TokenService} from "../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BoardsListComponent,
    DocumentsListComponent,
    UserInfoComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  tokenService: TokenService = inject(TokenService);
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const optionalToken = this.tokenService.getAccessToken();
    if (optionalToken == undefined) {
      this.router.navigate(['/login']);
    }
  }
}
