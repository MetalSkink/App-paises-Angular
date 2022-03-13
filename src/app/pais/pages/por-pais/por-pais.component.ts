import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService:PaisService) { }

  paises  : Country[] = [];
  termino : string = '';
  hayError: boolean = false;

  buscar(termino:string){
    this.hayError= false;
    this.termino= termino;
    this.paisService.buscarPais(termino)
        .subscribe({
          next: (paises) => {
            this.paises=paises;
          },
          error: (err) => {
            this.hayError= true;
            console.log(err);
            this.paises = [];
          }
        });
  }

  sugerencias(termino: string){
    this.hayError= false;
  }

}
