import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-progresso',
	templateUrl: './progresso.component.html',
	styleUrls: ['./progresso.component.scss'],
})
export class ProgressoComponent {
	@Input() progresso = 0;

	ngOnchanges() {
		console.log(this.progresso);
	}
}
