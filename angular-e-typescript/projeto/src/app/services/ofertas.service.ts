import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasModel } from './interface/ofertas-model';

@Injectable({
	providedIn: 'root',
})
export class OfertasService {
	constructor(private httpRequest: HttpClient) {}
	private baseUrl = 'http://localhost:3000/ofertas';

	getOfertas(): Observable<OfertasModel[]> {
		return this.httpRequest.get<OfertasModel[]>(this.baseUrl);
	}

	getOfertasPorCategoria(
		categoria: 'diversao' | 'restaurante'
	): Observable<OfertasModel[]> {
		return this.httpRequest.get<OfertasModel[]>(
			`${this.baseUrl}?categoria=${categoria}`
		);
	}

	getOferta(id: string): Observable<OfertasModel> {
		return this.httpRequest.get<OfertasModel>(`${this.baseUrl}/${id}`);
	}
}
