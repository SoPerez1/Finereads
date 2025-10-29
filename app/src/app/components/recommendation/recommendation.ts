import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InyRecommendation } from '../../inyecciones/iny-recomendation';

@Component({
  selector: 'app-recommendation',
  imports: [CommonModule],
  templateUrl: './recommendation.html',
  styleUrls: ['./recommendation.css']
})
export class Recommendation implements OnInit {
  title: string = "Echoes of My Readings";
  name: string = "Stories that have left a mark on me and deserve a place on the shelf of my memories.";
  description: string = "Among dragons, wizards, and ancient secrets, each story is a doorway that steals a few hours of sleep and gifts me a thousand adventures.";

  books: any[] = [];

  constructor(private inyRecommendation: InyRecommendation) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.books = this.inyRecommendation.getBooks();
  }
}
