import { CommonModule } from '@angular/common';
import { IMovie, MovieService, MovieApiResponse } from '../services/movie'; // Import MovieApiResponse
import { Component, OnInit } from '@angular/core';

declare const UIkit: any;

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  imports: [CommonModule]
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    UIkit.modal('#loading-modal').show();

    this.movieService.getMovies().subscribe({
      next: (response: MovieApiResponse) => {
        this.movies = response.data;
        UIkit.modal.alert(response.message);
        UIkit.modal('#loading-modal').hide();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des films :', err);
        UIkit.modal('#loading-modal').hide();
      }
    });
  }

  getStars(maxStars: number): number[] {
    return Array.from({ length: maxStars }, (_, i) => i);
  }

  rateMovie(movie: IMovie, rating: number): void {
    movie.rating = rating;
    this.movieService.updateMovieRating(movie.id, rating).subscribe();
  }
}

