import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './imovie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string =  "http://localhost:8080/api/v1/movies";
  private saveUrl: string = "http://localhost:8080/api/v1/movie";
  private omdbUrl: string = "http://www.omdbapi.com/?s=";
  private apiKey: string = "&apikey=9dd8c7b2";
  private deleteUrl: string = "http://localhost:8080/api/v1/movie/";

  constructor(private http: HttpClient, private router : Router) { }

  saveMovie(movie: IMovie): Observable<IMovie> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<IMovie>(this.saveUrl, movie);
  }

  getMovies() : Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url);
  }

  getMovieById(): Observable<IMovie>{
    return this.http.get<IMovie>('http://localhost:8080/api/v1'+this.router.url);
  }

  getMovieOmdb(title: string) {
    let url =`${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }

  deleteMovie(id){
    return this.http.delete(this.deleteUrl+id);
    }

}
