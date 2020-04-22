import { IDetalheCard } from './interfaces/idetalhescard';
import { CardsService } from './cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { DetalheCard } from './models/detalheCard';
import { MatDialog } from '@angular/material/dialog';
import { DetalheComponent } from './detalhe/detalhe.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cards: Card[];
  detalhes: DetalheCard[];
  hideme = [];
  detalhe: IDetalheCard;
  Index: any;
  constructor(
    private cardService: CardsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
    return this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  mostrarDetalheCard(index, id){
    this.cardService.getCardById(id).subscribe(result => {
      this.detalhe = result;
      console.log(this.detalhe);
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetalheComponent, {
      data: {
        imagem: this.detalhe.imagem,
        nome: this.detalhe.nome,
        texto: this.detalhe.texto,
        frase: this.detalhe.frase
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
