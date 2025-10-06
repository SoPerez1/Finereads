import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prominent-author',
  imports: [CommonModule],
  templateUrl: './prominent-author.html',
  styleUrls: ['./prominent-author.css']
})
export class ProminentAuthor implements OnInit, OnDestroy{
  title: string = "Autor destacado";
  name: string = "Raven Kennedy";
  biography:string = "Su serie más aclamada se viralizó en la comunidad literaria de TikTok, BookTok, lo que le permitió abrirse paso a otros mercados y a otros países, entre ellos España. Fue en 2022 cuando Kennedy aterrizó en el mercado español con la primera entrega de la serie, La prisionera de oro. En ella se introduce a los personajes en los que la autora sigue profundizando en las siguientes partes: Glint, Gleam y Glow."

images = [
    'assets/prominentAuthor/LaPrisioneraDeOro1.jpg',
    'assets/prominentAuthor/LaPrisioneraDeOro2.jpg',
    'assets/prominentAuthor/LaPrisioneraDeOro3.jpg'
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
