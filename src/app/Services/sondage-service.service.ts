import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Sondage } from '../sondage';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SondageServiceService {

  private apiUrl: string;
  private sondage: Sondage;

  constructor(private httpClient: HttpClient) {
    this.apiUrl= ENV.apiUrl + '/sondage';
  }

  // getSondage(): Sondage {
  //   let url = this.apiUrl;
  //   this.httpClient.get<Sondage>(url).subscribe((sondage) => this.sondage = sondage);
  //   console.log(this.sondage);
  //   return this.sondage;
  // }

  getSondage(): Observable<Sondage> {
		let result = new Subject<Sondage>();
		this.httpClient.get<Sondage>(this.apiUrl)
			.subscribe(
				(sondage) => result.next(sondage)
      );
		return result;
  }
  getNbJour():Observable<number>{
    let result = new Subject<number>();
    this.httpClient.get<number>(this.apiUrl+'/nbjour')
    .subscribe((nbjour)=>result.next(nbjour));
    return result;
  }
}
