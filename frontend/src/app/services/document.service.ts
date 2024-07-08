import { Injectable } from '@angular/core';
import {Document} from "../interfaces/document";
import axios from "axios";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  async getAllDocuments(accessToken: string): Promise<Document[]> {
    const response = await axios.get(
      `${environment.backendApiUri}/api/get-documents`,
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
