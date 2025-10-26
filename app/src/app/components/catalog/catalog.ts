import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProminentAuthor } from '../prominent-author/prominent-author';
import { Recommendation } from "../recommendation/recommendation";
import { BookList } from '../book-list/book-list'; 
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProminentAuthor, Recommendation, BookList],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class Catalog {
  @Output() autorSeleccionado = new EventEmitter<string>();

  gender = [
    { id: 1, name: 'Fantasía' },
    { id: 2, name: 'Ciencia Ficción' },
    { id: 3, name: 'Romance' },
    { id: 4, name: 'Misterio' }
  ];

  printGender = false; 
  selectGender = '';     
  seccionActual = 'home'; 

  toggleGeneros() {
    this.printGender = !this.printGender;
  }

  selectGender2(name: string) {
    this.selectGender = name;
    this.printGender = false; 
  }

  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
    this.printGender = false;
    this.selectGender = '';
  }

  seleccionarAutor(nombre: string) {
    this.autorSeleccionado.emit(nombre);
  }

  scrollToSection(name: string) {
    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
