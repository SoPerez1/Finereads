import { Component } from '@angular/core';
import { Catalog } from '../components/catalog/catalog';
import { ProminentAuthor } from '../components/prominent-author/prominent-author';
import { Start } from '../components/start/start';
import { Recommendation } from '../components/recommendation/recommendation';   



@Component({
  selector: 'app-ejercicios',
  imports: [ Catalog, ProminentAuthor, Start, Recommendation],
  templateUrl: './ejercicios.html',
  styleUrl: './ejercicios.css'
})
export class Ejercicios {

}
