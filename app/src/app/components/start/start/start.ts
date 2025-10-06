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
bento2: string ="Entre las sombras de las páginas laten mundos enteros, esperando ser descubiertos."
printThis : boolean = false;

  messageOn(){
    this.printThis= true;
  }

  messageOff(){
    this.printThis = false;
  }
}
