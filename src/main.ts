import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';


import {AppComponent} from './app/app/app.component';
import {MovieListComponent} from './app/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
