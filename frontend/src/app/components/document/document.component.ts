import {Component, Input} from '@angular/core';
import { Document } from "../../interfaces/document";

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  @Input() document!: Document
}
