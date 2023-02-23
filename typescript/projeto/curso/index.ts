import { CarroModel } from './Carro/interface.js';
import Carro from './Carro/model.js';

import Concessionaria from './Concessionaria/model.js';
import { Db } from './Database/model.js';
import Pessoa from './Pessoa/model.js';

const carroA = new Carro({
	modelo: 'dodge',
	portas: 4,
});
const carroB = new Carro({
	modelo: 'veloster',
	portas: 3,
});
const carroC = new Carro({
	modelo: 'cerato',
	portas: 4,
});

const listaDeCarros: CarroModel[] = [carroA, carroB, carroC];

const concessionaria = new Concessionaria({
	endereco: 'Av. Paulista',
	listaDeCarros,
});

const cliente = new Pessoa({
	carroPreferido: 'cerato',
	nome: 'João',
});

const carroEncontrado = concessionaria
	.mostrarListaDeCarros()
	.find((carro) => carro.modelo === cliente.dizerCarroPreferido());

if (carroEncontrado) cliente.comprarCarro(carroEncontrado);

console.log(cliente.dizerCarroQueTem());

// ----------------------------------------------------------------

const bancoConcessionaria: Db<Concessionaria> = new Db();
const bancoPessoa: Db<Pessoa> = new Db();

bancoConcessionaria.inserir(concessionaria);
bancoPessoa.atualizar(cliente);
