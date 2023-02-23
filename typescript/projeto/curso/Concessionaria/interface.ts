import { CarroModel } from '../Carro/interface.js';

export interface ConcessionariaModel {
	endereco: string;
	listaDeCarros: CarroModel[];
}

export interface IConcessionaria {
	fornecerEndereco(): string;
	mostrarListaDeCarros(): CarroModel[];
	fornecerHoariosDeFuncionamento(): string;
}
