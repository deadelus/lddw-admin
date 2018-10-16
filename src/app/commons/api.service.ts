import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  public token = 'auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  private httpOptions;

  private checkToken() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      };
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  private handleError(err: HttpErrorResponse) {
    return throwError( err.message );
  }

  get(path: string): Observable<any> {
    this.checkToken();
    return this.http.get(`${environment.api_url}${path}`, this.httpOptions)
      .pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res )
    );
  }


  put(path: string, params: any): Observable<any> {
    this.checkToken();
    return this.http.put(`${environment.api_url}${path}`, params, this.httpOptions).pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res )
      );
  }

  post(path: string, params: any): Observable<any> {
    this.checkToken();
    return this.http.post(`${environment.api_url}${path}`, params, this.httpOptions).pipe(
      catchError( (err) => this.handleError(err)),
      map( ( res: Response ) => res )
    );
  }

  delete(path: string, params: any): Observable<any> {
    this.checkToken();
    return this.http.delete(`${environment.api_url}${path}`, this.httpOptions)
      .pipe(
        catchError( (err) => this.handleError(err)),
        map( ( res: Response ) => res )
    );
  }
}
