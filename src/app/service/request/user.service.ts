import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8090/api/getClient?typeDNI=C&numberDNI=23445322';

  constructor(private readonly httpClient : HttpClient) { }

  getClient(): Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }
}
