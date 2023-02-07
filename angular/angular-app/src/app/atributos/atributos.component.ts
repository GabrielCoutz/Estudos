import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.scss'],
})
export class AtributosComponent {
  itens: { nome: string }[] = [{ nome: 'teste 1' }];
  nome: string = '';
  valor: number = 4599;

  salvar() {
    this.itens.push({
      nome: this.nome,
    });
    this.nome = '';
  }
}
