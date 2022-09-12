import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposProdutosService {

  private produtos = [
    {id: 1, nome: "amortecedor", valor: 299.99, fabricante: "bosh"},
    {id: 2, nome: "mola", valor: 59.99, fabricante: "molasX"}
  ]

  constructor() { }

  enviar_id(id: number){
    const dados_selecionados = this.produtos.filter(produto => produto.id === id)
    return dados_selecionados[0]
  }
}
