import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Client } from '../client';
import { Observable, Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string;
  private clientNumber: Client;
  private found: boolean;


  constructor(private httpClient: HttpClient) {
    this.apiUrl = ENV.apiUrl + '/client';
  }

  creat(client: Client): Observable<Client> {
    let result = new Subject<Client>();
    this.httpClient.post<Client>(this.apiUrl, client)
      .subscribe((newClient) => {
        result.next(newClient);
        console.log(newClient)
      }, (response: HttpErrorResponse) => {
        result.error(response.message);
      });

    return result;
  }

  // find(client: Client): Subject<boolean> {
  //   console.log("on est dans clientService")
  //   let result = new Subject<boolean>();
  //   this.httpClient.get(this.apiUrl + '/find/' + client.numero)    
  //   .subscribe((result) => {
  //       // console.log(rep);

  //       // result.complete();
  //     }, (response: HttpErrorResponse) => {
  //       result.error(response.message);
  //     });
    
  //   return result;
  // }

  find(client: Client): Observable<Client> {
    let result = new Subject<Client>();
		this.httpClient.get<Client>(this.apiUrl+ '/find/'+ client.numero)
			.subscribe(
				(client) => result.next(client)
      );
		return result;
  }
  // let result = new Subject<Client>();
  //   this.httpClient.post<Client>(this.apiUrl+'/find'+client.numero, )
  //     .subscribe((clientNumber) => {
  //       result.complete();
  //       console.log("clientNumber du service : "+clientNumber);
  //     },(response: HttpErrorResponse) => {
  //       result.error(response.message);
  //     });
  //   return result;

  
}
