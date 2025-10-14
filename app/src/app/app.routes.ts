import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { ProminentAuthor } from './components/prominent-author/prominent-author';
import { Recommendation } from './components/recommendation/recommendation';
import { Ejercicios } from './ejercicios/ejercicios';
import { Book } from './book/book'; 
export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'autor/:nombre', component: ProminentAuthor },
  { path: 'recomendaciones', component: Recommendation },
  { path: 'ejercicios', component: Ejercicios },
  { path: 'libro/:id', component: Book }
];
