import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
  bento1: string = "Some stories choose you";
  bento2: string = "Those who read live many lives, many souls, many destinies.";
  descriptionFinereads: string = "At Finereads, you’ll find a space dedicated to your readings, where you can keep track of the books you’ve read, along with your thoughts and emotions about each one. You’ll also be able to discover new recommended reads, as well as share your own reviews and opinions with other readers. Finereads is the perfect tool for any book lover who wants to deepen their reading experience.";
  image = [
    'assets/start/image-bento.jpg'
  ];
  printThis: boolean = false;

  messageOn() {
    this.printThis = true;
  }

  messageOff() {
    this.printThis = false;
  }
}
