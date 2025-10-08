import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { ProminentAuthor } from './components/prominent-author/prominent-author';
import { Recommendation } from './components/recommendation/recommendation';
export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'autor/:nombre', component: ProminentAuthor },
  { path: 'recomendaciones', component: Recommendation }
];
