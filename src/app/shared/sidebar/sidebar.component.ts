import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(): string[] {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService ) {}
  
  sidebarSearch( busqueda: string ) {
    this.gifsService.gifsBuscados( busqueda );
  }
  
}
