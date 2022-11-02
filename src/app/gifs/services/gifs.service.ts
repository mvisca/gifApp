import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  
  get historial(): string[] {
    return [...this._historial];
  }
  
  gifsBuscados( busqueda: string ): void {
    if ( busqueda.length > 0 ) {
      this._historial.unshift( busqueda );
    }
    if ( this.historial.length > 10 ) {
      this._historial.pop();
    }
  } 
}