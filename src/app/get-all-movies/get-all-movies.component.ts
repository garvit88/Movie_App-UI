import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-all-movies',
  templateUrl: './get-all-movies.component.html',
  styleUrls: ['./get-all-movies.component.css']
})
export class GetAllMoviesComponent implements OnInit {

  movies;
 // formVar: FormGroup;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(data => {this.movies = data});
  } 

  onSubmit(model) {
    console.log(model.id);
    
  }

  // getMovie(){
    
  //   this.allmovies.getMovieById().subscribe(
  //     data => this.movie = data 
  //   );


}
