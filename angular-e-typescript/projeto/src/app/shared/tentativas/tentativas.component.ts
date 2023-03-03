import { Component, Input } from '@angular/core';
import { Coracao } from './coracao.model';

@Component({
	selector: 'app-tentativas',
	templateUrl: './tentativas.component.html',
	styleUrls: ['./tentativas.component.scss'],
})
export class TentativasComponent {
	coracoes: Coracao[] = [
		new Coracao(true),
		new Coracao(true),
		new Coracao(true),
	];
	@Input() tentativas = 0;

	ngOnChanges(): void {
		console.log(this.tentativas);
		if (this.tentativas !== this.coracoesRestantes) this.removeCoracao();
	}

	removeCoracao() {
		this.coracoes[this.tentativas].cheio = false;
	}

	get coracoesRestantes(): number {
		return this.coracoes.reduce((acc, item) => {
			if (item.cheio) acc++;
			return acc;
		}, 0);
	}
}
