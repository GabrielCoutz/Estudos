import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasModel } from '../services/interface/ofertas-model';
import { OfertasService } from '../services/ofertas.service';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent {
	constructor(
		private route: ActivatedRoute,
		private ofertasService: OfertasService
	) {}

	oferta: OfertasModel | undefined;

	ngOnInit() {
		const { id } = this.route.snapshot.params;
		this.ofertasService.getOferta(id).subscribe({
			error: (err) => console.log(err),
			next: (r) => (this.oferta = r),
		});
	}
}
