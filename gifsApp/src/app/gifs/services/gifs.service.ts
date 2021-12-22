import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[]=[];
  private apiKey    :string='Yd0Nl5NGYHSR85X2sryRdvjxJMe4ktWi';

  get historial(){{
    return [...this._historial];
  }}
  constructor(private http: HttpClient){}

  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.slice(0,10);
    }
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Yd0Nl5NGYHSR85X2sryRdvjxJMe4ktWi&q=Dragon ball Z&limit=10')
    .subscribe((resp:any)=>{
      console.log(resp.data);
    })
  }

}
