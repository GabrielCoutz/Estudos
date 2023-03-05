import { Component } from '@angular/core';
import { OfertasModel } from '../services/interface/ofertas-model';
import { OfertasService } from '../services/ofertas.service';

@Component({
	selector: 'app-restaurantes',
	templateUrl: './restaurantes.component.html',
	styleUrls: ['./restaurantes.component.scss'],
})
export class RestaurantesComponent {
	constructor(private ofertasService: OfertasService) {}
	restaurantes: OfertasModel[] = [];

	ngOnInit() {
		this.ofertasService.getOfertasPorCategoria('restaurante').subscribe({
			error: (err) => console.log(err),
			next: (r) => {
				console.log(r);
				this.restaurantes = r;
			},
		});
	}
}
