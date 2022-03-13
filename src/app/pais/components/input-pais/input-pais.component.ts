import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styles: [],
})
export class InputPaisComponent implements OnInit {
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }
}
