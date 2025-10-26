import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from "../book-item/book-item";
import { BookService } from '../../inyecciones/book.service';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BookItem],
  standalone: true,
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList implements OnInit {

  books: any[] = [];
  selectedBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(bookTitle: string): void {
    const book = this.books.find(b => b.title === bookTitle);
    this.selectedBook = null; 

    setTimeout(() => {
      this.selectedBook = book || null;
    }, 300);
  }
}
