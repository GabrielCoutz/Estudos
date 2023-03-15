#include<stdio.h>
#include<stdbool.h>
#include <assert.h>

struct Lista {
    struct No* inicio;
    int tamanho;
};

struct No {
  struct No* proximo;
  int info;

};

struct Lista* criar(){
    struct Lista* nova_lista = (struct Lista*) malloc(sizeof(struct Lista));

    if(nova_lista != NULL) {
        nova_lista->inicio = NULL;
        nova_lista->tamanho = 0;
    }

    return nova_lista;
}

struct Lista* inserir(struct Lista* lista, int posicao, int item){
    assert(lista != NULL);
    assert(posicao >= 0 && posicao <= lista->tamanho);
    struct No* novo_no = (struct No*) malloc(sizeof(struct No));

    novo_no->info = item;
    if(posicao == 0) {
        novo_no->proximo = lista->inicio;
        lista->inicio = novo_no;
    } else {
        struct No* aux = lista->inicio;
        for(int i = 0; i < posicao -1; i++) {
            aux = aux->proximo;
        }
        novo_no->proximo = aux->proximo;
        aux->proximo = novo_no;
    }
    lista->tamanho++;
}

imprimir(struct Lista* li) {
    assert(li != NULL);
    struct No* aux = li->inicio;
    for(int i = 0; i < li->tamanho; i++) {
        printf("%d ", aux->info);
        aux = aux->proximo;
    }
 }

bool existe(struct Lista* lista, int item){
    assert(lista != NULL);
    struct No* aux = lista->inicio;

    for (int i = 0; i < lista->tamanho; i++) {
        if(aux->info == item) return true;
        aux = aux->proximo;
    }

    return false;
}

bool vazia(struct Lista* li) {
    assert(li != NULL);     
    if (li->inicio == NULL) {
        return true;
    } else {
        return false;
    }
}

main() {
    struct Lista* lista = criar();
    inserir(lista, 0, 1);
    inserir(lista, 0, 2);
    inserir(lista, 0, 3);
    imprimir(lista);
    printf("Existe? %s, %d", existe(lista, 3) ? "sim" : "nao", existe(lista, 3));
}
