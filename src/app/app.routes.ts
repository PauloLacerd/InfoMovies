/**
 * Responsável pelo controle das rotas da aplicação.
 */
import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { ListMoviesComponent } from './list-movies/list-movies.component'
import { SearchedMovieComponent } from './search/searched-movie/searched-movie.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'movies/:page', component: ListMoviesComponent},
    {path: 'movie/:id', component: MovieDetailComponent},
    {path: 'search/:movieName', component: SearchedMovieComponent}
]