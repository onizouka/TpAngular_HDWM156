import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService, IMovie } from './movie';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve movies from API via GET', () => {
    const dummyMovies: IMovie[] = [
      { id: 1, slug: "1", title: "Test Movie", year: 2020, author: "Test", duration: 120, genre: "Test", synopsis: "Synopsis", cover: "url", rating: 4 }
    ];

    service.getMovies().subscribe(movies => {
      expect(movies.length).toBe(1);
      expect(movies).toEqual(dummyMovies);
    });

    const req = httpMock.expectOne('http://localhost:3000/movies');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovies);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
