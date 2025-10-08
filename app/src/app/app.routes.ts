import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { ProminentAuthor } from './components/prominent-author/prominent-author';

export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'autor/:nombre', component: ProminentAuthor },
];
