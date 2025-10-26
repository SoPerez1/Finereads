import { Routes } from '@angular/router';
import { Ejercicios } from './ejercicios/ejercicios';
import { Book } from './book/book'; 
import { Start } from "./components/start/start";

export const routes: Routes = [
  { path: 'ejercicios', component: Ejercicios },
  { path: 'libro/:id', component: Book },
  { path: '', component: Start }
];
