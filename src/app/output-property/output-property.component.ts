import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  // outputs: ['mudouValor']; Também pode ser declarado aqui 
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit() {
  }

}