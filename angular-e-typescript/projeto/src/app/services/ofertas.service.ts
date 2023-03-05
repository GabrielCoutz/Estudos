import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasModel } from './interface/ofertas-model';

@Injectable({
	providedIn: 'root',
})
export class OfertasService {
	constructor(private httpRequest: HttpClient){}

	getOfertas(filtro?: {destaque: string}): Observable<OfertasModel[]> {
		const params = `?destaque=${filtro?.destaque}`

		return this.httpRequest.get<OfertasModel[]>(`http://localhost:3000/ofertas${filtro ? params : ''}`)

	}
}
