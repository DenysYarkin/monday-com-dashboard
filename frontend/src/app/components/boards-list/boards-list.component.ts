import {Component, inject, OnInit} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgForOf} from "@angular/common";
import {BoardService} from "../../services/board.service";
import {Board} from "../../interfaces/board";
import {UserInfoComponent} from "../user-info/user-info.component";
import {DocumentsListComponent} from "../documents-list/documents-list.component";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [
    BoardComponent,
    NgForOf,
    UserInfoComponent,
    DocumentsListComponent
  ],
  templateUrl: './boards-list.component.html',
  styleUrl: './boards-list.component.css'
})
export class BoardsListComponent implements OnInit {

  boardService: BoardService = inject(BoardService);
  tokenService: TokenService = inject(TokenService);

  public boardsList: Board[] = [];

  async ngOnInit() {
    const optionalToken: string | undefined = this.tokenService.getAccessToken();
    let accessToken: string = '';
    if (optionalToken) {
      accessToken = optionalToken.toString();
    }
    else {
      console.log('Error: can\'t fetch boards: unauthorized')
      return;
    }
    try {
      this.boardsList = await this.boardService.getAllBoards(accessToken);
    }
    catch (error) {
      console.log("Failed to fetch boards:", error);
    }
  }
}
