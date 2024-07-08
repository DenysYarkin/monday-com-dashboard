import {Component, inject} from '@angular/core';
import {DocumentComponent} from "../document/document.component";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../interfaces/document";
import {NgForOf} from "@angular/common";
import {TokenService} from "../../services/token.service";

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
  tokenService = inject(TokenService);

  public documentsList: Document[] = [];

  async ngOnInit() {
    const optionalToken: string | undefined = this.tokenService.getAccessToken();
    let accessToken: string = '';
    if (optionalToken) {
      accessToken = optionalToken.toString();
    }
    else {
      console.log('Error: can\'t fetch documents: unauthorized')
      return;
    }
    try {
      this.documentsList = await this.documentsService.getAllDocuments(accessToken);
    }
    catch (error) {
      console.log("Failed to fetch documents:", error);
    }
  }
}
