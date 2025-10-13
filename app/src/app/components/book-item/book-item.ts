import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-book-item',
  imports: [CommonModule],
  templateUrl: './book-item.html',
  styleUrls: ['./book-item.css']
})
export class BookItem {
  @Input() book: any;
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  selectBook(): void {
    this.onSelect.emit(this.book.title);
  }
}
