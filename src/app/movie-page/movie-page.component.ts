import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  public movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieById()
    .subscribe(data => this.movie = data);
  }

}
