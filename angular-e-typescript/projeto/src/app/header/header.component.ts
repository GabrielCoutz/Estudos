import { Component } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { OfertasModel } from '../services/interface/ofertas-model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, catchError } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	private subject: Subject<string> = new Subject<string>();

	constructor(private ofertasService: OfertasService) {}

	resposta: Observable<OfertasModel[]> | undefined;

	ngOnInit(): void {
		this.resposta = this.subject.pipe(
			// debounceTime(2000),
			switchMap((termo: string) => this.ofertasService.pesquisarOfertas(termo)),
			catchError(() => [])
		);
		this.resposta.subscribe({
			next: (ofertas) => console.log(ofertas),
			error: (err) => console.log(err),
		});
	}

	pesquisa(value: string): void {
		if (value.trim()) this.subject.next(value.trim());
	}

	limparPesquisa(pesquisa: HTMLInputElement): void {
		pesquisa.value = '';
	}
}
