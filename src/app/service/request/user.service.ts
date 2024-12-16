import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type DocumentType = {
  documentType: string;
  documentNumber: number;
};

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private apiUrl = 'https://nttdata-java-9b46689dced6.herokuapp.com/api/getClient';

  constructor(private readonly httpClient : HttpClient) { }

  getClient(dataJson : DocumentType): Observable<any>{
    const urlParms = this.apiUrl +`?typeDNI=${dataJson.documentType}&numberDNI=${dataJson.documentNumber}`;
    return this.httpClient.get(urlParms);
  }
}
