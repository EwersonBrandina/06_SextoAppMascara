import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  private produtos = [
    {id: 1, nome: 'betoneira', valor: 5000.00, quantidade: 10},
    {id: 2, nome: 'capacete', valor: 110.00, quantidade: 10},
    {id: 3, nome: 'marreta', valor: 300.00, quantidade: 5},
    {id: 4, nome: 'serrote', valor: 40.00, quantidade: 15}
  ]

  constructor() { }

  enviarTodosDados(){
    return this.produtos
  }

  enviarDadosId(id: number){
    const produtoSelecionado = this.produtos.filter(produto => produto.id === id)
    return produtoSelecionado [0]
  }
}
