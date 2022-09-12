import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiposProdutosService } from '../tipos-produtos.service';


@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.page.html',
  styleUrls: ['./produtos-listagem.page.scss'],
})
export class ProdutosListagemPage implements OnInit {

  public produto

  constructor(
    private route: ActivatedRoute,
    private produtos_service : TiposProdutosService
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'))
    this.produto = this.produtos_service.enviar_id(id)
  }

}
