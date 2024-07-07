import {Component, inject, OnInit} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgForOf} from "@angular/common";
import {BoardService} from "../services/board.service";
import {Board} from "../interfaces/board";
import {UserInfoComponent} from "../user-info/user-info.component";

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [
    BoardComponent,
    NgForOf,
    UserInfoComponent
  ],
  templateUrl: './boards-list.component.html',
  styleUrl: './boards-list.component.css'
})
export class BoardsListComponent implements OnInit {

  boardService: BoardService = inject(BoardService);

  public boardsList: Board[] = [];

  async ngOnInit() {
    const accessToken = localStorage.getItem('accessToken') || '';
    this.boardsList = await this.boardService.getAllBoards(accessToken);
  }

  // TODO: probably delete constructor
  constructor() {
    // TODO: probably handle case with no token?
  }

}
