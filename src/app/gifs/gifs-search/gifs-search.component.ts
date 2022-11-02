import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-gifs-search',
  templateUrl: './gifs-search.component.html',
})
export class GifsSearchComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    
    this.txtBuscar.nativeElement.value = '';
  }
}