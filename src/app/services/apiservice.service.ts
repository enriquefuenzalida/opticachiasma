import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiURL = "https://jsonplaceholder.typicode.com";
  apiURL2 = "https://jsonplaceholder.typicode.com";

  constructor( private http:HttpClient) {  }
  getPosteos():Observable<any>{ return this.http.get(this.apiURL+'/posts/').pipe( retry(4) ); }
  getPosteosDos():Observable<any>{ return this.http.get(this.apiURL+'/comments/').pipe( retry(4) ); }

}
