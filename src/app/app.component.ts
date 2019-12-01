import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

}
