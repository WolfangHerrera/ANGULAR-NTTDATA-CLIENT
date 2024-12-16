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
export class UserService {

  private apiUrl = 'http://localhost:8090/api/getClient';

  constructor(private readonly httpClient : HttpClient) { }

  getClient(dataJson : DocumentType): Observable<any>{
    const urlParms = this.apiUrl +`?typeDNI=${dataJson.documentType}&numberDNI=${dataJson.documentNumber}`;
    // const urlParms = this.apiUrl +`?typeDNI=${dataJson.documentType}&numberDNI=23445322`;
    return this.httpClient.get(urlParms);
  }
}
