import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IMovie {
  id: number;
  slug: string;
  title: string;
  year: number;
  author: string;
  duration: number;
  genre: string;
  synopsis: string;
  cover: string;
  rating: number;
}

export interface MovieApiResponse {
  code: string;
  message: string;
  data: IMovie[];
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  // Return the full response object, not just the array
  getMovies(): Observable<MovieApiResponse> {
    return this.http.get<MovieApiResponse>(this.apiUrl);
  }

  updateMovieRating(id: number, rating: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { rating });
  }
}
