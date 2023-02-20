import { CarroModel } from '../Carro/interface';

export interface IPessoa {
	dizerNome(): string;
	dizerCarroPreferido(): string;
	comprarCarro(carro: CarroModel): CarroModel;
	dizerCarroQueTem(): CarroModel | string;
}

export interface PessoaModel {
	nome: string;
	carroPreferido: string;
}
