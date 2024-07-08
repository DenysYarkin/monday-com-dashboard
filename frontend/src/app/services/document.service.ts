import { Injectable } from '@angular/core';
import {Document} from "../interfaces/document";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  // TODO: use Option<Document[]>
  // TODO: move api url to some global config variable
  async getAllDocuments(accessToken: string): Promise<Document[]> {
    const response = await axios.get(
      'http://localhost:3000/api/get-documents',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data.documents
  }
}
