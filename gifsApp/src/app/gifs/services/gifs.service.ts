import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'Yd0Nl5NGYHSR85X2sryRdvjxJMe4ktWi';

  public resultados: Gif[] = [];
  get historial() {
    {
      return [...this._historial];
    }
  }
  constructor(private http: HttpClient) {
    if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial'));
    }
   }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Yd0Nl5NGYHSR85X2sryRdvjxJMe4ktWi&q=${query}&limit=10`)
      .subscribe((resp) => {
        this.resultados=resp.data;
        console.log(resp.data);
      })
  }

}
