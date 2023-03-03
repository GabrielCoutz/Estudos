import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'projeto';

	jogoEmAndamento = true;
	mensagem = '';

	encerrarJogo(valor: string): void {
		this.jogoEmAndamento = !valor;
		this.mensagem = valor;
	}

	reiniciar(): void {
		this.jogoEmAndamento = true;
	}
}
