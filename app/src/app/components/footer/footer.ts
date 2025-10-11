import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  credits: string = 'Desarrollado como proyecto final de Full Stack Developer, UTN + GSC.';
  desarrollador: string = 'Pérez Sofía';
  moreInfo: string = '2025 Finereads. Todos los derechos reservados.';
}