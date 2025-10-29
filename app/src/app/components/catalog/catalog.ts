import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProminentAuthor } from '../prominent-author/prominent-author';
import { Recommendation } from '../recommendation/recommendation';
import { BookList } from '../book-list/book-list';
import { Start } from "../start/start"; 

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProminentAuthor, Recommendation, BookList, Start],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class Catalog {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
