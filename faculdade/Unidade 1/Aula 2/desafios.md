## Componentes e elementos de linguagem de programação

```c
#include <stdio.h>

#define LIMITE_MAXIMO_CARACTERES_NOME 100

struct modelo_cliente {
    const char nome[LIMITE_MAXIMO_CARACTERES_NOME];
    int idade;
};

main(){
    struct modelo_cliente cliente;
    int classificacao_filme = 0;

    printf("Insira o nome do cliente: ");
    fflush(stdin);
    fgets(cliente.nome, LIMITE_MAXIMO_CARACTERES_NOME, stdin);

    printf("Insira a idade do cliente: ");
    scanf("%d", &cliente.idade);

    printf("Insira a classificação do filme: ");
    scanf("%d", &classificacao_filme);

    printf("\nCliente: %s", cliente.nome);
    printf("\nIdade: %d anos", cliente.idade);
    printf("\nClassificacao do filme: %d anos", classificacao_filme);
}
```