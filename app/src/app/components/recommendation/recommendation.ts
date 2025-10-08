import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-recommendation',
  imports: [CommonModule],
  templateUrl: './recommendation.html',
  styleUrls: ['./recommendation.css']
})
export class Recommendation {
  title: string = "Mi rincón...";
  name: string = "Lecturas para perderse entre mundos imposibles";
  description:string = "Entre dragones, magos y secretos antiguos, cada historia es una puerta que me roba unas horas de sueño y me regala mil aventuras.";


  books  = [
    {title: 'Una Corte de Niebla y Furia',calification : '5/5', image: 'assets/portadas/nieblaFuria.jpg'},
    {title: 'El Nombre del Viento', calification : '5/5', image: 'assets/portadas/misterio3.jpg'},
    {title: 'La Biblioteca de los Muertos', calification : '4/5', image: 'assets/portadas/misterio2.jpg'},
    {title: 'Los Crímenes de Oxford', calification : '4/5', image: 'assets/portadas/misterio1.jpg'},
    {title: 'El Libro de Azrael', calification : '4/5', image: 'assets/portadas/libroAzrael.jpg'},
    {title: 'Una Corte de Hielo y Estrellas', calification : '1.5/5', image: 'assets/portadas/hielosEstrellas.jpg'},
    {title: ' Un Reino de Carne y Fuego', calification : '4/5', image: 'assets/portadas/carneFuego.jpg'},
    {title: 'Binding 13', calification : '2/5', image: 'assets/portadas/binding13.jpg'},
    {title: 'A Oscuras', calification : '3/5', image: 'assets/portadas/aOscuras.jpg'},
    {title: 'Alas de Sangre', calification : '4/5', image: 'assets/portadas/alasSangre.jpg'},
    {title: 'Alas de Hierro', calification : '4/5', image: 'assets/portadas/alasHierro.jpg'},
    {title: 'Agregar nueva calificacion', image: 'assets/portadas/portadaBlanco.jpg'},
  ];

}
