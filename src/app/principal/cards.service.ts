import { IDetalheCard } from './interfaces/idetalhescard';

import { BASE_URL } from './../../app.api';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Card } from './models/card';
import { DetalheCard } from './models/detalheCard';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient: HttpClient) {  }

  getCards():Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${BASE_URL}` + '/cards/')
    .pipe(
      map((data) => data["cards"].map((json: any) => new Card(json))),
      //map((data: Card[]) => data.map((json: any) => new Card(json))),
      catchError(this.errorHandl)
    )
  }

  getCardById(id: string):Observable<any>{
    return this.httpClient.get<DetalheCard>(`${BASE_URL}` + '/cards/' + id)
    .pipe(
      map(res => {
        const card = res["card"];
        const detalhes = card.foreignNames.map((json: any) => new DetalheCard(json));
        return detalhes.find(x => x.idioma === 'Portuguese (Brazil)');
      }),
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
