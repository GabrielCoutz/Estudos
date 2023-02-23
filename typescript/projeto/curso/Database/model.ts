import { DbInterface } from './interface';

export class Db<T> implements DbInterface<T> {
	nomeTabela = '';

	inserir(object: T): boolean {
		return true;
	}

	atualizar(object: T): boolean {
		return true;
	}

	remover(id: number): T {
		return {} as T;
	}

	selecionar(id: number): T {
		return {} as T;
	}

	selecionarTodos(): T[] {
		return [];
	}
}
