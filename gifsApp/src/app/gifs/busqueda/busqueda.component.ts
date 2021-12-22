import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

 @ViewChild('txtBuscar') txtBuscar:ElementRef<HTMLInputElement>;

 //Aquí se le inyecta la propiedad al constructor, la propiedad
 //de gifs service para poder usarlo
 constructor(private gifsService:GifsService){}
  
  buscar(){
    const value=this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value='';
  }
}
