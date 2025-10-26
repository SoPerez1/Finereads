import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { InyRecommendation } from '../../inyecciones/iny-recomendation';

@Component({
  selector: 'app-recommendation',
  imports: [CommonModule],
  templateUrl: './recommendation.html',
  styleUrls: ['./recommendation.css']
})
export class Recommendation  implements OnInit {
  title: string = "Mi rincón...";
  name: string = "Lecturas para perderse entre mundos imposibles";
  description:string = "Entre dragones, magos y secretos antiguos, cada historia es una puerta que me roba unas horas de sueño y me regala mil aventuras.";

  books: any[] = [];
  constructor(private inyRecommendation: InyRecommendation) {
    this.ngOnInit();
  }

  ngOnInit(){
    this.books = this.inyRecommendation.getBooks();
  }
}
