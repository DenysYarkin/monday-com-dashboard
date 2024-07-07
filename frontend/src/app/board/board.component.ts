import {Component, Input} from '@angular/core';
import {Board} from "../interfaces/board";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() board!: Board
}
