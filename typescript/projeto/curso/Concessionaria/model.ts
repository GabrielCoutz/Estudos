/* eslint-disable @typescript-eslint/no-unused-vars */
import { CarroModel } from '../Carro/interface';
import { ConcessionariaModel, IConcessionaria } from './interface.js';

export default class Concessionaria implements IConcessionaria {
	private endereco = '';
	private listaDeCarros: CarroModel[] = [];

	constructor(item: ConcessionariaModel) {
		this.endereco = item.endereco;
		this.listaDeCarros = item.listaDeCarros;
	}

	fornecerEndereco(): string {
		return this.endereco;
	}

	mostrarListaDeCarros(): CarroModel[] {
		return this.listaDeCarros;
	}

	fornecerHoariosDeFuncionamento(): string {
		return 'xampson';
	}
}
