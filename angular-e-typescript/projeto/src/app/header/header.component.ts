import { Component } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { OfertasModel } from '../services/interface/ofertas-model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(private ofertasService: OfertasService) {}

	resposta: Observable<OfertasModel[]> | undefined;

	pesquisa(value: string) {
		this.resposta = this.ofertasService.pesquisarOfertas(value);

		this.resposta.subscribe((r) => console.log(r));
	}
}
