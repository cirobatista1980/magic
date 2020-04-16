import { ICard } from './../icard';

export class Card implements ICard{
  id: string;
  nome: string;
  custoMana: string;
  raridade: string;
  cores: string[];
  tipos: string[];
  artista: string;
  set: string;

  constructor(json : any) {
    this.id = json.id;
    this.nome = json.name;
    this.custoMana = json.manaCost;
    this.raridade = json.rarity;
    this.cores = json.colors;
    this.tipos = json.types;
    this.artista = json.artist;
    this.set = json.set;
  }
}
