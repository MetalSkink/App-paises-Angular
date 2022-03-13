import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.buscarPaisPorCodigo(id))
      )
      .subscribe(pais => {
        console.log(pais);
        this.pais = pais;
      });

    // this.activatedRoute.params
    //     .subscribe(({id}) => {
    //       console.log(id);

    //     this.paisService.buscarPaisPorCodigo( id )
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })
  }
}
