import { Component } from '@angular/core';
import { OfertasModel } from '../services/interface/ofertas-model';
import { OfertasService } from '../services/ofertas.service';

@Component({
	selector: 'app-diversao',
	templateUrl: './diversao.component.html',
	styleUrls: ['./diversao.component.scss'],
})
export class DiversaoComponent {
	constructor(private ofertasService: OfertasService) {}
	diversoes: OfertasModel[] = [];

	ngOnInit() {
		this.ofertasService.getOfertasPorCategoria('diversao').subscribe({
			error: (err) => console.log(err),
			next: (r) => {
				console.log(r);
				this.diversoes = r;
			},
		});
	}
}
