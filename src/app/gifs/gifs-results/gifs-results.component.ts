import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gifs-gifs-results',
  templateUrl: './gifs-results.component.html',
})
export class GifsResultsComponent {

get resultados() {
  return this.gifsServices.resultados;
}
  
constructor( private gifsServices: GifsService ) {
  this.gifsServices.resultados = JSON.parse(localStorage.getItem( 'resultados' )!) || []; 
  }
}