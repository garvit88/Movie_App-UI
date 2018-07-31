import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllMoviesComponent } from './get-all-movies/get-all-movies.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
    {
        path: '',
        component: GetAllMoviesComponent
    },
    {
        path: 'movie/:id',
        component: MoviePageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }