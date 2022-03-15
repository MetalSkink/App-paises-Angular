import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  constructor(private paisService:PaisService) { }

  paises  : Country[] = [];
  paisesSugeridos  : Country[] = [];
  termino : string = '';
  hayError: boolean = false;
  mostrarSugerencias = false;

  buscar(termino:string){
    this.hayError= false;
    this.termino= termino;
    this.mostrarSugerencias= false;

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
    this.termino = termino;
    this.mostrarSugerencias= true;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0,3)
        },
        error: (err) => {
          this.paisesSugeridos = []
        }
      });
  }

  buscarSugeridos(termino: string) {
    this.buscar(termino);
  }

}
