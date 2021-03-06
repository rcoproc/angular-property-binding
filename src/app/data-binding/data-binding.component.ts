import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string  = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

  valorAtual: string = ''; 
  valorSalvo = '' ;

  nome: string = 'Abc';

  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'RCO', 
    idade: 20
  }

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return this.cursoAngular;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual= (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouserOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
