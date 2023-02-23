import { Component } from '@angular/core';

@Component({
	selector: 'app-tentativas',
	templateUrl: './tentativas.component.html',
	styleUrls: ['./tentativas.component.scss'],
})
export class TentativasComponent {
	coracaoVazio = 'assets/coracao_vazio.png';
	coracaoCheio = 'assets/coracao_cheio.png';
}
