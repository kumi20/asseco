import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AppServicesService {
  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  getProducts(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + "/productsList/")
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getProduct(id): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + "/productsList?productId=" + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error) {
    let errorMessage = "";
    if (error.console.error instanceof ErrorEvent) {
      errorMessage = error.console.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
