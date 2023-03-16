## Filas

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <assert.h>

struct No {
    int info;
    struct No* proximo;
};

struct Fila {
    struct No* inicio;
    struct No* fim;
    int tamanho;
};


struct Fila* criar() {
    struct Fila* nova_fila = (struct Fila*) malloc(sizeof(struct Fila));

    if (nova_fila != NULL) {
        nova_fila->inicio = NULL;
        nova_fila->fim = NULL;
        nova_fila->tamanho = 0;
    }
    return nova_fila;
}

void enfileirar(struct Fila* fila, int item) {
    assert(fila != NULL);

    struct No* novo_no = (struct No*) malloc(sizeof(struct No));
    if (novo_no != NULL) {
        novo_no->info = item;
        novo_no->proximo = NULL;

        if (fila->fim != NULL) fila->fim->proximo = novo_no;
        else fila->inicio = novo_no;

        fila->fim = novo_no;
        fila->tamanho++;
    }
}

int desenfileirar(struct Fila* fila) {
    assert(fila);

    struct No* aux = fila->inicio;
    int elemento = aux->info;
    fila->inicio = aux->proximo;

    if (fila->inicio == NULL) fila->fim = NULL;

    fila->tamanho--;
    free(aux);

    return elemento;
}

bool vazia(struct Fila* fila) {
    return !fila->inicio;
}

int calcularClientesEmEsperaMaxima(struct Fila* filaTempoEntrada, struct Fila* filaTempoAtendimento){
    int esperaTotal = 0;
    int clientesEmEsperaMaxima = 0;

    while (!vazia(filaTempoEntrada)) {
        printf("ENTROU: %d", esperaTotal);
        int tempoEntrada = desenfileirar(filaTempoEntrada);
        int tempoAtendimento = desenfileirar(filaTempoAtendimento);

        if(esperaTotal - tempoEntrada > 20) clientesEmEsperaMaxima += 1;
        else printf("else");

        esperaTotal += tempoAtendimento;
    }

    printf("\nFDJSIKOFDS: %d\n", clientesEmEsperaMaxima);
    return clientesEmEsperaMaxima;
}

int main() {
    int numClientes, tempoEntrada, tempoAtendimento;
    printf("Insira o numero de clientes: ");
    scanf("%d", &numClientes);

    struct Fila* filaTempoEntrada = criar();
    struct Fila* filaTempoAtendimento = criar();

    for (int i = 0; i < numClientes; i++) {
        printf("\n Insira o tempo que o cliente %d entrou na fila: ", i + 1);
        scanf("%d", &tempoEntrada);
        enfileirar(filaTempoEntrada, tempoEntrada);

        printf("\n Insira o tempo de atendimento do cliente %d : ", i + 1);
        scanf("%d", &tempoAtendimento);
        enfileirar(filaTempoAtendimento, tempoAtendimento);
    }

    int clientesEmEsperaMaxima = calcularClientesEmEsperaMaxima(filaTempoEntrada, filaTempoAtendimento);
    printf("\nHoje, %d clientes(s) esperarao mais de 20 minutos na fila", clientesEmEsperaMaxima);
}
```