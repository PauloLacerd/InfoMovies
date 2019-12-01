/**
 * Componente Home - Tela de entrada da aplicação.
 */
import { Component, OnInit } from '@angular/core';

import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'mf-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadingPage()
  }

  /**
   * Método para carregar a tela de loading do NGX.
   */
  loadingPage(){
    this.spinner.show();

    setTimeout(() => {
        this.spinner.hide();
    }, 500);
  }

}
