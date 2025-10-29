import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  credits: string = 'Developed as the final project for Full Stack Developer, UTN + GSC.';
  developer: string = 'Sofía Pérez';
  moreInfo: string = '2025 Finereads. All rights reserved.';
}
