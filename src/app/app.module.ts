import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { NgxSpinnerModule } from 'ngx-spinner'

import { ROUTES } from './app.routes'

import { ServiceModule } from './service/service.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputSearchComponent } from './search/input-search/input-search.component';
import { SearchedMovieComponent } from './search/searched-movie/searched-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InputSearchComponent,
    SearchedMovieComponent,
    ListMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
