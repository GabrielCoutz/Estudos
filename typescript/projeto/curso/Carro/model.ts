import Veiculo from '../Veiculo/model.js';
import { CarroModel } from './interface.js';

export default class Carro extends Veiculo {
	portas: number;

	constructor(item: CarroModel) {
		super(item.modelo);
		this.portas = item.portas;
	}
}
