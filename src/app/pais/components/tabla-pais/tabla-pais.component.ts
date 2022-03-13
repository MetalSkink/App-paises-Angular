import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
})
export class TablaPaisComponent {

  @Input()
  paises: Country[] = []
}
