import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AppServices {
  baseUrl = "http://wawsiis13:5000/api/";

  shopCounter = new Subject<any>();

  constructor(private http: HttpClient) {}

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  get(uri): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + uri)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getAuth(uri): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + uri, {headers:{
        "Authorization": "Bearer " + localStorage.getItem('wapro-erp-token')
      }})
      .pipe(retry(1), catchError(this.errorHandl));
  }

  post(uri, date): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + uri, date)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  postAuth(uri, date): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + uri, date, {headers:{
        "Authorization": "Bearer " + localStorage.getItem('wapro-erp-token')
      }})
      .pipe(retry(1), catchError(this.errorHandl));
  }

  deleteAuth(uri): Observable<any> {
    return this.http
      .delete<any>(this.baseUrl + uri, {headers:{
        "Authorization": "Bearer " + localStorage.getItem('wapro-erp-token')
      }})
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error) {
    let errorMessage = "";    
    errorMessage = `Error Code: ${error.error.status}\nMessage: ${error.error.title}`;
    return throwError(errorMessage);
  }

  
}
