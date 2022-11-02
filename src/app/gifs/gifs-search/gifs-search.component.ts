import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gifs-gifs-search',
  templateUrl: './gifs-search.component.html',
})
export class GifsSearchComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor( private gifsServices: GifsService ) {}
  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.gifsServices.gifsBuscados( valor );   
    this.txtBuscar.nativeElement.value = '';
  }
  
}