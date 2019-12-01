/**
 * Componente MovieDetail - Responsável por listar informações de um filme baseando-se no seu ID.
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../service/movie.service'

import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'mf-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit, AfterViewInit {

  //Variável que irá receber o ID do filme através da URL da página.
  id: number

  //Lista com informações do filme.
  movie: any

  //Lista de genêros do filme.
  genres: Array<any>

  //Lista com as informações dos atores do filmes.
  credits: Array<any>

  //Lista com o path das imagens do filmes.
  imagePath: Array<any>

  //Lista com informações sobre a equipe técnica.
  technicalTeam: Array<any>

  constructor(private spinner: NgxSpinnerService, private movieService: MovieService, private routeId: ActivatedRoute) { }

  ngOnInit() {
    this.loadingPage()
    this.id = this.routeId.snapshot.params['id']
    this.getMovieForId()
    this.getCredits()
    this.getImages()
  }

  /**
   * Verificando se a classe de contraste foi aplicada para iniciar a tela com o contraste ativado.
   */
  ngAfterViewInit() {
    var link = document.getElementById('link_Contraste')
    let sinopse = document.getElementById('sinopse_Detail')

    if (link.getAttribute('href') === 'auto_contraste.css') {
      sinopse.classList.remove('sinopse_Detail')
    }
  }

  /**
   * Pegar as informações de um filme baseando-se no seu ID.
   */
  getMovieForId() {
    this.movieService.getDataForId(this.id).subscribe(
      data => { this.movie = data, this.genres = data['genres'] }
    )
  }

  /**
   * Pegar os informações sobre os atores de um filme baseando-se no seu ID.
   */
  getCredits() {
    this.movieService.getCredits(this.id).subscribe(
      data => { this.credits = data['cast'], this.technicalTeam = data['crew'] }
    )
  }

  /**
   * Pegar as imagens de um filme baseando-se no seu ID.
   */
  getImages() {
    this.movieService.getImages(this.id).subscribe(
      data => { this.imagePath = data['backdrops'] }
    )
  }
  
  /**
   * Método para carregar a tela de loading do NGX.
   */
  loadingPage() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

}
