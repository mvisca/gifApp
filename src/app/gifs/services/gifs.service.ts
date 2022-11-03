import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/searchGifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'bxxemLAg77cTg86RONWAoGkW0NFzWiQt';
  
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];
  
  get historial(): string[] {
    return [...this._historial];
  }
  
  
  constructor( private http: HttpClient ) {}
  
  
  gifsBuscados( busqueda: string ) {
    // Si hay 'busqueda' y si la busqueda no está en el historial, agrega al historial.
    if ( busqueda.trim().length !== 0 &&
      !this._historial.includes( busqueda.toLowerCase() )
    ) {
      this._historial.unshift( busqueda.toLowerCase() );
    // Mantiene el array en 10 entradas
    } 
    if ( this._historial.length > 10 ) {
      this._historial.pop()
    }
  
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=bxxemLAg77cTg86RONWAoGkW0NFzWiQt&q=${busqueda}&limit=10&lang=es`)
    .subscribe( ( resp ) => {
      this.resultados = resp.data;
      console.log(this.resultados);      
    })
  } 
}





    // para este se agrega async en la función
    // const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bxxemLAg77cTg86RONWAoGkW0NFzWiQt&q={$busqueda}&limit=20&lang=es`);
    // const data = await resp.json(); 
    // console.log(data);
    
    // Este sin async
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=bxxemLAg77cTg86RONWAoGkW0NFzWiQt&q={$busqueda}&limit=20&lang=es').then(resp => {
    //   resp.json().then(data => {
    //   })
    // })
    