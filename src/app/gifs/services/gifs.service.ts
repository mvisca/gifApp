import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/searchGifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  // Api request string maker
  private _giphyUrl: string = 'https://api.giphy.com/v1/gifs/search?api_key=';

  private _apiKey: string = 'bxxemLAg77cTg86RONWAoGkW0NFzWiQt';
  
  private _apiParams: string = '&limit=10&lang=es';
  
  // Search history array
  private _historial: string[] = [];
  
  // Search results array
  public resultados: Gif[] = [];
  
  get historial(): string[] {
    return [...this._historial];
  }
  
  
  constructor( private http: HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem( 'historial' )! ) || [];
  }
  
  
  gifsBuscados( busqueda: string ) {
    if( !this._historial.includes( busqueda ) ) {
      this._historial.unshift( busqueda );
      this._historial = this._historial.splice(0, 9);
      
      localStorage.setItem( 'historial', JSON.stringify( this._historial ) );
    }
    
    this.http.get<SearchGifsResponse>(`${this._giphyUrl}${this._apiKey}&q=${busqueda}${this._apiParams}`)
    .subscribe( ( resp ) => {
      this.resultados = resp.data;
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
    