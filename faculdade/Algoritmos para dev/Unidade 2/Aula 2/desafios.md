## Estruturas de repetição determinísticas


```c
#include <stdio.h>

main() {
    int total_alunos = 0, continuar;
    float nota, media, soma_notas = 0.0;

    do {
        printf("Digite a nota do aluno %d: ", ++total_alunos);
        scanf("%f", &nota);

        soma_notas += nota;

        printf("Deseja inserir mais notas? Insira o valor de acordo com a opcao.");
        printf("\n[ 1 ] Sim");
        printf("\n[ 0 ] Nao\n\n");
        scanf("%d", &continuar);

    } while (continuar);

    printf("\nTotal de alunos: %d", total_alunos);
    printf("\nsoma_nota: %d", soma_notas);
    printf("\ntotal_alunos: %d", total_alunos);
    
    media = soma_notas / (float) total_alunos;
    printf("\nMedia das notas: %.2f", media); 
}
```