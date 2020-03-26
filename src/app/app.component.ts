import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos = [{id:0, nome:'Arroz', valor:10.00}, {id:1, nome:'Feijão', valor:5.00}];
  carrinho = [];
  total = null;


adicionar(produto){
 var { nome, valor } = produto;

  if (this.carrinho.indexOf(produto) === -1){
    this.carrinho.push(produto);
    produto.total=valor
    produto.quantidade = 1
  }
  else{
    produto.quantidade += 1;
    produto.total = produto.quantidade * valor;
  }
  this.total += produto.valor;
}
}
