##Pilhas

```c
#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>
#include <assert.h>
#include <string.h>

typedef struct {
    char info;
    struct No* proximo;
} No;

typedef struct {
    struct No* topo;
    int tamanho;
} Pilha;

Pilha* criar() {
    Pilha* nova_pilha = (Pilha*) malloc(sizeof(Pilha));

    if(nova_pilha != NULL) {
        nova_pilha->topo = NULL;
        nova_pilha->tamanho = 0;
    }

    return nova_pilha;
}

void empilhar(Pilha* pilha, char item) {
    assert(pilha != NULL);
    No* novo_no = (No*) malloc(sizeof(No));

    if (novo_no != NULL) {
        novo_no->info = item;
        novo_no->proximo = pilha->topo;
        pilha->topo = novo_no;
        pilha->tamanho++;
    }
}

char desempilhar(Pilha* pilha) {
    assert(pilha != NULL && pilha->topo != NULL);
    No* aux = pilha->topo;
    char* elemento = aux->info;

    pilha->topo = aux->proximo;
    pilha->tamanho--;

    return elemento;
}

bool vazia(Pilha* pilha) {
    if (pilha->topo == NULL && pilha->tamanho == 0) return true;
    else return false;
}

bool combina(char caractere1, char caractere2){
    switch (caractere1) {
    case ')':  
        return caractere2 == '(';
    case '}':  
        return caractere2 == '{';
    case ']':  
        return caractere2 == '[';
    default: 
        return false;
    }
}

bool validar(char exp[]){
    Pilha* pilha = criar();
    for (int i = 0; i < strlen(exp); i++) {
        char caractere = exp[i];
        switch (caractere) {
            case '(':
            case '{':
            case '[':
                empilhar(pilha, caractere);
                break;
            case ')':
            case '}':
            case ']': {
                if(vazia(pilha)) return false;
                if(!combina(caractere, desempilhar(pilha))) return false;
            }
        }
    }
    return vazia(pilha);
}


main() {
    Pilha* pilha = criar();

    printf("\nO resultado esta: %s\n", validar("{([])}") ? "correto" : "incorreto");
}
```