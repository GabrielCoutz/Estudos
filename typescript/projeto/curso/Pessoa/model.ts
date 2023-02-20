import { CarroModel } from '../Carro/interface.js';
import { IPessoa, PessoaModel } from './interface.js';

export default class Pessoa implements IPessoa {
	private nome: string;
	private carroPreferido: string;
	private carro: CarroModel | undefined;

	constructor(item: PessoaModel) {
		this.nome = item.nome;
		this.carroPreferido = item.carroPreferido;
	}

	dizerNome(): string {
		return this.nome;
	}

	dizerCarroPreferido(): string {
		return this.carroPreferido;
	}

	comprarCarro(carro: CarroModel): CarroModel {
		this.carro = carro;
		return this.carro;
	}

	dizerCarroQueTem(): CarroModel | string {
		if (this.carro) return this.carro;
		return 'Não possuo nenhum carro';
	}
}
