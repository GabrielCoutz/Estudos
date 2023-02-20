import { IVeiculo } from './interface.js';

export default class Veiculo implements IVeiculo {
	modelo: string;
	velocidade = 0;

	constructor(modelo: string) {
		this.modelo = modelo;
	}

	acelerar(): void {
		this.velocidade += 10;
	}

	parar(): void {
		this.velocidade = 0;
	}

	velocidadeAtual(): string {
		return `O veículo está a ${this.velocidade} km/h`;
	}
}
