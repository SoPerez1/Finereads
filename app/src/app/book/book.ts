import { Component } from '@angular/core';
import { BookItem } from '../components/book-item/book-item';
import { BookList } from '../components/book-list/book-list';
@Component({
  selector: 'app-book',
  imports: [BookItem, BookList],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {

}
