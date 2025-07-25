import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];
