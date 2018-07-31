
import { Component } from '@angular/core';
import { IMovie } from './imovie';
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';
import { OmdbMovie } from './omdbmovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies;
  omdbmovies;
  omdbMovie;
  id=1;
  movieTitle = '';
  constructor(private movieService: MovieService) { }
  movieModel = new IMovie(1,"", "", "","");

  onSubmit(omdbMovie:OmdbMovie) {
    this.movieModel.id=this.id++;
    this.movieModel.title=omdbMovie.Title;
    this.movieModel.year=omdbMovie.Year;
    this.movieModel.imdbId=omdbMovie.imdbID;
    this.movieModel.poster=omdbMovie.Poster;
    this.movieService.saveMovie(this.movieModel).subscribe(res => console.log('Saved'));
  }

  onClick() {
    this.movieService.getMovies().subscribe(data  => { this.movies = data });

  }

  onSearch() {
    this.movieService.getMovieOmdb(this.movieTitle).subscribe(data => {
      this.omdbMovie = data['Search'];
      console.log("Movie data is ",data)
    });

  }

  onDelete(movie){
    this.movieService.deleteMovie(movie.id).subscribe(res => console.log('Deleted'))
    window.location.reload(true);
  }

}