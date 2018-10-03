import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    return new Headers(headersConfig);
  }

  private handleError(err: Response){
    return Observable.throw( JSON.stringify(err) );
  }

  get(path:string, params:URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders(), search: params }).pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res.json )
      );
  }


  put(path:string, params:URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders(), search: params }).pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res.json )
      );

  }

  post(path:string, params:URLSearchParams = new URLSearchParams()): Observable<any> { 
    return this.http.post(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders(), search: params }).pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res.json )
      );

  }

  delete(path:string, params:URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders(), search: params }).pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res.json )
      );

  }
}
