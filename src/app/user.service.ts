import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private HttpHeaders = new HttpHeaders(
    {
     'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }
    );

  constructor(public http: HttpClient) {
    this.http = http;
  }

  saveUser(user: any): Observable<any> {
      // const headers = new HttpHeaders({});
      return this.http.post('http://localhost:8080/registration', user, {headers: this.HttpHeaders} ).pipe(
        catchError(e => {
           console.log(e.error);
          return throwError(e);
        })
      );
  }

  loginUser(user: any): Observable<any> {
    // const headers = new HttpHeaders({});
    return this.http.post('http://localhost:8080/login', user, {headers: this.HttpHeaders} ).pipe(
      catchError(e => {
        console.log(e.error);
        return throwError(e);
      })
    );
  }

  getAllUsers(token: any): Observable<any> {
    const headersMethod = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get('http://localhost:8080/users', {headers: headersMethod} ).pipe(
      catchError(e => {
        console.log(e.error);
        return throwError(e);
      })
    );
  }

  getUser(token: any): Observable<any> {
    const headersMethod = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get('http://localhost:8080/getUser', {headers: headersMethod} ).pipe(
      catchError(e => {
        console.log(e.error);
        return throwError(e);
      })
    );
  }
}
