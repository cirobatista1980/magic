
import { BASE_URL } from './../../app.api';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) {  }

  getCards():Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${BASE_URL}` + '/cards/')
    .pipe(
      map((data: Card[]) => data.map((json: any) => new Card(json))),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
