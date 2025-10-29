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
  @Output() authorSelected = new EventEmitter<string>();

  showGenres = false; 
  selectedGenre = '';     
  currentSection = 'home';

  toggleGenres() {
    this.showGenres = !this.showGenres;
  }

  selectGenre(name: string) {
    this.selectedGenre = name;
    this.showGenres = false; 
  }

  changeSection(section: string) {
    this.currentSection = section;
    this.showGenres = false;
    this.selectedGenre = '';
  }

  selectAuthor(name: string) {
    this.authorSelected.emit(name);
  }

  scrollToSection(name: string) {
    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
