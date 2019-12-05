/**
 * Componente SearchMovie - Responsável por mostrar uma lista de filmes que é baseada no nome do filme pesquisado.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../../service/movie.service'

import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'mf-searched-movie',
  templateUrl: './searched-movie.component.html'
})
export class SearchedMovieComponent implements OnInit {

  //Variável que irá receber o titulo do filme passado pela URL.
  title: string

  //Lista de filmes pesquisado.
  searchs: Array<any> = []

  constructor(private spinner: NgxSpinnerService, private movieService: MovieService, private routeMovieName: ActivatedRoute) { }

  ngOnInit() {

    this.loadingPage()
    this.getMovieTitle()
    this.getSearch()
  }

  /**
   * Pegar a lista de filmes baseando-se no titulo pesquisado.
   */
  getSearch(){
    this.movieService.searchMovie(this.title.replace('%', '+')).subscribe(
      data => {this.searchs = data['results'], this.loadingPage()}
    )
  }

  /**
   * Pegar o nome do filme a partir da URL.
   */
  getMovieTitle(){
    this.routeMovieName.params.subscribe(
      params => {this.title = params['movieName'], this.getSearch(), document.getElementById('inputSearch').focus()}
    )
  }

  /**
   * Método para carregar a tela de loading do NGX.
   */
  loadingPage(){
    this.spinner.show();

    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
  }
}
