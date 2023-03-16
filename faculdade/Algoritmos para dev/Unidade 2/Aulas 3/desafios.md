## Operações e expressões

```c
#include <stdio.h> 
#include <ctype.h>

#define LIMITE_TAMANHO_NOME 30

main() {
    char nome[LIMITE_TAMANHO_NOME];
    char nome_maiusculo[LIMITE_TAMANHO_NOME];
    char nome_minusculo[LIMITE_TAMANHO_NOME];
    int i;

    printf("Insira o nome do aluno: ");
    fgets(nome, LIMITE_TAMANHO_NOME, stdin);

    for(int i = 0; i < LIMITE_TAMANHO_NOME; i++) {
        nome_maiusculo[i] = toupper(nome[i]);
    }

    for(int i = 0; i < LIMITE_TAMANHO_NOME; i++) {
        nome_minusculo[i] = tolower(nome[i]);
    }

    printf("\nNome inserido: %s", nome);
    printf("\nNome em maiusculo: %s", nome_maiusculo);
    printf("\nNome em minusculo: %s", nome_minusculo);
}
```