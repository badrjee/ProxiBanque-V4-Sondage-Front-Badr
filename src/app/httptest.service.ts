import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as ENV} from '../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Reponse} from './reponse';

@Injectable({
  providedIn: 'root'
})
export class HttptestService {
  private apiUrl: string;

  // instanciation d'un client http
  constructor(private httpClient: HttpClient) {
    this.apiUrl = ENV.apiUrl + '/reponse';
  }

  createReponse(reponse: Reponse): Observable<Reponse> {
    return this.httpClient.post<Reponse>(this.apiUrl, reponse);
  }

  getReponse(id: number): Observable<Reponse> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Reponse>(url);
  }
  
}
