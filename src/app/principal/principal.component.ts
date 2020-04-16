import { CardsService } from './cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cards: Card[];
  hideme = [];

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
    return this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  mostrarDetalheCard(index, id){

  }
}
