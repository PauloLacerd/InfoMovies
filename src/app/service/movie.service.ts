/**
 * Classe de Serviços reponsável por realizar as requisições para a API TMDB.
 */
import { Injectable } from '@angular/core';

import { API_KEY } from '../api_key'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { ErrorHandler } from './app.error-handler'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //URL's base para consumir a API.
  private base_URL: string = "https://api.themoviedb.org/3/movie/"
  private base_URL_All: string = "https://api.themoviedb.org/3/movie/popular"
  private base_URL_Search: string = "https://api.themoviedb.org/3/search/movie"

  constructor(private http: HttpClient){ }

  //Métodos de requisição para a API.

  /**
   * Pegar todos de uma lista baseando-se na sua página.
   */
  getData(page: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.base_URL_All}${API_KEY}&language=pt-BR&page=${page}`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  /**
   * Pegar um filme baseando-se no seu ID para mostrar seus detalhes.
   */
  getDataForId(id: number): Observable<any>{
    return this.http.get<any>(`${this.base_URL}${id}${API_KEY}&language=pt-BR`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  /**
   * Pegar informações sobre os creditos de um filmes baseando-se no seu ID.
   */
  getCredits(id: number): Observable<any>{
    return this.http.get<any>(`${this.base_URL}${id}/credits${API_KEY}`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  /**
   * Pegar as imagens de um filmes baseand-se no seu ID.
   */
  getImages(id: number): Observable<any>{
    return this.http.get<any>(`${this.base_URL}${id}/images${API_KEY}`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  /**
   * Pegar uma lista de filmes baseando-se no seu nome.
   */
  searchMovie(movieName: string): Observable<any>{
    return this.http.get<any>(`${this.base_URL_Search}${API_KEY}&query=${movieName}&language=pt-BR`)
      .pipe(catchError(ErrorHandler.handleError))
  }
}
  
