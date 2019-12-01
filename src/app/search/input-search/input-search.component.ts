/**
 * Componente InputSearch - Reponsável por pegar o titulo do filme pesquisado e repassar para o MovieService.
 */
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'mf-input-search',
  templateUrl: './input-search.component.html'
})
export class InputSearchComponent implements OnInit {

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  /**
   * Inicializar o formGroup utilizando o formBuiler e os Validators.
   */
  initForm(){
    this.formGroup = this.formBuilder.group({
      movieTitle: this.formBuilder.control('', [Validators.required])
    })
  }
}
