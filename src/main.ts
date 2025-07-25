import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from './app/app/app.component';
import {MovieListComponent} from './app/movie-list/movie-list.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
  provideHttpClient(),
    ],
})
