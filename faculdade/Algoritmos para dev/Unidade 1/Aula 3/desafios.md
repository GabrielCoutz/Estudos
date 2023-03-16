## Operações e expressões

```c
#include <stdio.h>

#define LIMITE_MAXIMO_CARACTERES_NOME 100

struct modelo_cliente {
    const char nome[LIMITE_MAXIMO_CARACTERES_NOME];
    int idade;
};

struct modelo_filme {
    const int classificacao;
    const int disponivel;
};

main(){
    struct modelo_cliente cliente;
    struct modelo_filme filme;

    printf("Insira o nome do cliente: ");
    fflush(stdin);
    fgets(cliente.nome, LIMITE_MAXIMO_CARACTERES_NOME, stdin);

    printf("Insira a idade do cliente: ");
    scanf("%d", &cliente.idade);

    printf("O filme esta disponivel? Insira o valor de acordo.");
    printf("\n[ 0 ] Nao");
    printf("\n[ 1 ] Sim\n");
    scanf("%d", &filme.disponivel);

    printf("\nInsira a classificacao do filme: ");
    scanf("%d", &filme.classificacao);

    printf("\nCliente: %s", cliente.nome);
    printf("\nIdade: %d anos", cliente.idade);
    printf("\nFilme esta disponivel: %s", filme.disponivel ? "Sim" : "Nao" );
    printf("\nClassificacao do filme: %d anos", filme.classificacao);

    int pode_alugar = cliente.idade >= filme.classificacao;

    printf("\nPode ser alugado pelo cliente: %s", pode_alugar ? "Sim" : "Nao" );

    if(!pode_alugar) {
        printf("\nAnos restantes: %d", filme.classificacao - cliente.idade );
    }
}
```