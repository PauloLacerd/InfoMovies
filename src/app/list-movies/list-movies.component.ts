/**
 * Componente Movies - Responsável por listar os filmes da requisição feita pelo MovieService e listar todos os filmes baseando-se no número da página.
 */
import { Component, OnInit } from '@angular/core';

import { MovieService } from '../service/movie.service'
import { ActivatedRoute } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'mf-list-movies',
  templateUrl: './list-movies.component.html'
})
export class ListMoviesComponent implements OnInit {

  //Variável que recebe a lista de filmes da requisição.
  movies: Array<any>

  //Array com o número de páginas de filmes que será listada na tela.
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  //Variável que irá receber o número da página através da URL.
  page: number

  constructor(private spinner: NgxSpinnerService, private movieService: MovieService, private routePage: ActivatedRoute) { }

  ngOnInit() {
    this.loadingPage()
    this.getPage()
    this.getAllData()
  }

  /**
   * Pegar a lista de filmes da requisição feita pelo MovieService.
   */
  getAllData() {
    this.movieService.getData(this.page).subscribe(
      data => {this.movies = data['results']}
    )
  }

  /**
   * Pegar o número da página na URL e repassar para o MovieService para uma nova requisição.
   */
  getPage(){
    this.routePage.params.subscribe(
      params => {this.page = params['page'], this.loadingPage(), this.getAllData()}
    )
  }
  
  /**
   * Método para carregar a tela de loading do NGX.
   */
  loadingPage(){
    this.spinner.show();

    setTimeout(() => {
        this.spinner.hide();
    }, 1000);
  }
}
