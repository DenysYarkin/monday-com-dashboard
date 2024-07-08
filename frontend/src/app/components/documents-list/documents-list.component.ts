import {Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {DocumentComponent} from "../document/document.component";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../interfaces/document";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-documents-list',
  standalone: true,
  imports: [
    DocumentComponent,
    NgForOf
  ],
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.css'
})
export class DocumentsListComponent {
  documentsService: DocumentService = inject(DocumentService);

  public documentsList: Document[] = [];

  async ngOnInit() {
    const accessToken = localStorage.getItem('accessToken') || '';
    this.documentsList = await this.documentsService.getAllDocuments(accessToken);
  }

  // TODO: probably delete constructor
  constructor() {
    // TODO: probably handle case with no token?
  }

  protected readonly document = document;
}
