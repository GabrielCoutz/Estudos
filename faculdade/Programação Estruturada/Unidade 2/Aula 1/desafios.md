## O que são as Estruturas de Dados do tipo Lista?

```c
#include<stdio.h>
#include<stdbool.h>
#include <assert.h>
#include <string.h>

typedef struct {
    struct No* inicio;
    int tamanho;
} Lista;

typedef struct {
  struct No* proximo;
  int info;
} No;

typedef struct {
    char* nome;
    int distanciaDoJogador;
} Inimigo;

Lista* criar(){
    Lista* nova_lista = (Lista*) malloc(sizeof(Lista));

    if(nova_lista != NULL) {
        nova_lista->inicio = NULL;
        nova_lista->tamanho = 0;
    }

    return nova_lista;
}

Lista* inserir(Lista* lista, int posicao, int item){
    assert(lista != NULL);
    assert(posicao >= 0 && posicao <= lista->tamanho);
    No* novo_no = (No*) malloc(sizeof(No));

    novo_no->info = item;
    if(posicao == 0) {
        novo_no->proximo = lista->inicio;
        lista->inicio = novo_no;
    } else {
        No* aux = lista->inicio;
        for(int i = 0; i < posicao -1; i++) {
            aux = aux->proximo;
        }
        novo_no->proximo = aux->proximo;
        aux->proximo = novo_no;
    }
    lista->tamanho++;
}

bool existe(Lista* lista, int item){
    assert(lista != NULL);
    No* aux = lista->inicio;

    while (aux) {
        if(aux->info == item) return true;
        aux = aux->proximo;
    }

    return false;
}

int posicao_menor(Lista* lista){
    assert(lista != NULL);
    No* aux = lista->inicio;
    int menorValor = aux->info;
    int posicaoMenor = 0;

    for (int i = 0; i < lista->tamanho; i++) {
        if(aux->info < menorValor) {
            posicaoMenor = i;
            menorValor = aux->info;
        }
        aux = aux->proximo;
    }

    return posicaoMenor;
}

main() {
    Inimigo i1, i2, i3;

    i1.nome = "Vampiro";
    i1.distanciaDoJogador = 10;
    
    i2.nome = "Morcego Assasino";
    i2.distanciaDoJogador = 2;

    i3.nome = "Zoombie";
    i3.distanciaDoJogador = 3;

    Inimigo inimigos[3] = {i1, i2, i3};

    Lista* listaDistancias = criar();
    inserir(listaDistancias, 0, i1.distanciaDoJogador);
    inserir(listaDistancias, 0, i2.distanciaDoJogador);
    inserir(listaDistancias, 0, i3.distanciaDoJogador);

    int posicaoMenor = posicao_menor(listaDistancias);

    printf("Inimigo mais proximo: %s\n", inimigos[posicaoMenor].nome);
}
```