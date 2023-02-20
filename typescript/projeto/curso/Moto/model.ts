import Veiculo from '../Veiculo/model.js';
import { MotoModel } from './interface.js';

export default class Moto extends Veiculo {
	constructor(item: MotoModel) {
		super(item.modelo);
	}
}
