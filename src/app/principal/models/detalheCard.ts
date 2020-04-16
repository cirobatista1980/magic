
import { IDetalheCard } from '../interfaces/idetalhescard';

export class DetalheCard implements IDetalheCard {
  nome: string;
  texto: string;
  frase: string;
  imagem: string;
  idioma: string;

  constructor(json : any) {
    this.frase = json.flavor;
    this.idioma = json.language;
    this.imagem = json.imageUrl;
    this.nome = json.name;
    this.texto = json.text;
  }

}
