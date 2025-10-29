import { Routes } from '@angular/router';
import { Ejercicios } from './ejercicios/ejercicios';
import { Book } from './book/book'; 

export const routes: Routes = [
  { path: 'ejercicios', component: Ejercicios },
  { path: 'libro/:id', component: Book },
  
];
