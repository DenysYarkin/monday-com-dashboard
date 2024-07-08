import { Component } from '@angular/core';
import {BoardsListComponent} from "../boards-list/boards-list.component";
import {DocumentsListComponent} from "../documents-list/documents-list.component";
import {UserInfoComponent} from "../user-info/user-info.component";

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
export class DashboardComponent {

}
