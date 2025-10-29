import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prominent-author',
  imports: [CommonModule],
  templateUrl: './prominent-author.html',
  styleUrls: ['./prominent-author.css']
})
export class ProminentAuthor implements OnInit, OnDestroy {
  title: string = "Featured Author";
  name: string = "Raven Kennedy";
  biography: string = "Her most acclaimed series went viral within the BookTok literary community on TikTok, which allowed her to reach other markets and countries, including Spain. In 2022, Kennedy entered the Spanish market with the first installment of the series, The Gold Prisoner. In it, she introduces the characters that she continues to develop in the following parts: Glint, Gleam, and Glow.";

  images = [
    'assets/prominentAuthor/LaPrisioneraDeOro1.jpg',
    'assets/prominentAuthor/LaPrisioneraDeOro2.jpg',
    'assets/prominentAuthor/LaPrisioneraDeOro3.jpg'
  ];
  image = [
    'assets/cats/image3.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1500);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
