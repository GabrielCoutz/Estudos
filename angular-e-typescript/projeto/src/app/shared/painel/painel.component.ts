import { Component, EventEmitter, Output } from '@angular/core';
import { FraseModel } from '../frases/index.model';
import { frases } from '../frases/mock';
import { TentativasComponent } from '../tentativas/tentativas.component';

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
	frases: FraseModel[] = frases;
	resposta = '';

	rodada = 0;
	rodadaFrase = frases[this.rodada];
	limite = frases.length - 1;

	progresso = 0;
	tentativas = new TentativasComponent().coracoesRestantes;
	@Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

	verifyAnswer(): void {
		const correctAnswer =
			this.resposta.toLowerCase() === this.rodadaFrase.frasePt;

		if (this.tentativas - 1 === -1)
			return this.encerrarJogo.emit('Infelizmente suas vidas acabaram =(');

		if (!correctAnswer) {
			this.tentativas--;
			return;
		}

		if (this.rodada === this.limite)
			return this.encerrarJogo.emit('Parabéns! Você ganhou!');

		this.atualizarRodada();
		this.progresso = (this.rodada / this.frases.length) * 100;
	}

	atualizarRodada(): void {
		this.rodada++;
		this.rodadaFrase = this.frases[this.rodada];
		this.resposta = '';
	}
}
