import {Component, inject, Input} from '@angular/core';
import { Board } from "../../interfaces/board";
import {BoardService} from "../../services/board.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogWindowComponent} from "../dialog-window/dialog-window.component";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() board!: Board

  boardService = inject(BoardService);
  dialog = inject(MatDialog);
  tokenService = inject(TokenService);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWindowComponent, {
      width: '40%',
      height: '250px',
      data: { itemName: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addItem(result);
      }
    });
  }

  addItem(itemName: string): void {
    const optionalToken: string | undefined = this.tokenService.getAccessToken();
    let accessToken: string = '';
    if (optionalToken) {
      accessToken = optionalToken.toString();
    }
    else {
      console.log('Can\'t add item: unauthorized');
      return;
    }
    this.boardService.createItem(this.board.id.toString(), itemName, accessToken)
      .then(response => {
        alert(response ? 'Item added successfully' : 'Error while adding a new item')
      });
  }
}
