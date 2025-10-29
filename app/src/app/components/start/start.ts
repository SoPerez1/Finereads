import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
bento1: string = "Algunas historias te elijen a vos";
bento2: string ="Quien lee, habita muchos cuerpos, muchas almas, muchos destinos.";
descriptionFinereads: string = "En Finereads, encontrarás un espacio dedicado a tus lecturas, donde podrás llevar un registro de tus libros leídos, tus pensamientos y emociones sobre cada uno de ellos. Además, podrás descubrir nuevas lecturas recomendadas, así como compartir tus propias reseñas y opiniones con otros lectores. Finereads es la herramienta perfecta para cualquier amante de los libros que desee profundizar en su experiencia de lectura.";
image= [
    'assets/start/image-bento.jpg'
  ];
printThis : boolean = false;

  messageOn(){
    this.printThis= true;
  }

  messageOff(){
    this.printThis = false;
  }
}
