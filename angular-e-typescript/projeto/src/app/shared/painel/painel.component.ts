import { Component } from '@angular/core';
import { FraseModel } from '../frases/index.model';
import { frases } from '../frases/mock';

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
	frases: FraseModel[] = frases;
	resposta = '';

	verifyAnswer(): void {
		console.log(this.resposta.toLowerCase() === frases[2].frasePt);
	}
}
