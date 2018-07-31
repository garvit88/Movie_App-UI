import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GetAllMoviesComponent } from "./get-all-movies/get-all-movies.component";
import { AppRoutingModule } from "./app-routing.module";
import { MoviePageComponent } from "./movie-page/movie-page.component";
import { SaveMovieComponent } from "./save-movie/save-movie.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

@NgModule({
  declarations: [
    AppComponent,
    GetAllMoviesComponent,
    MoviePageComponent,
    SaveMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
