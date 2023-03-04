import { Component } from '@angular/core';
import { OfertasModel } from '../services/interface/ofertas-model';
import { OfertasService } from '../services/ofertas.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [OfertasService],
})
export class HomeComponent {
	constructor(private ofertasService: OfertasService) {}
	ofertas: OfertasModel[] = [];

	ngOnInit() {
		this.ofertas = this.ofertasService.getOfertas();
		console.log(this.ofertas);
	}
}
