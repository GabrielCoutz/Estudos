## Escopo e passagem de parâmetros


```c
#include <stdio.h>

#define TAMANHO_MAX_VETOR 6

float calcularMedia(float vetor[], int tamanho) {
    float soma = 0.0, resultado = 0.0;

    for(int i = 0; i < tamanho; i++) soma += vetor[i];

    resultado = soma / (float) tamanho;
    return resultado;
}

float calcularMediana(float vetor[], int tamanho) {
    float resultado = 0.0;

    if (tamanho % 2 != 0) resultado = vetor[tamanho / 2];
    else resultado = (vetor[tamanho / 2] + vetor[(tamanho / 2) - 1]) / 2;

    return resultado;
}

main(){
    float vetor[TAMANHO_MAX_VETOR] = {1, 2, 3, 4, 5, 6};
    float media = calcularMedia(vetor, TAMANHO_MAX_VETOR);
    float mediana = calcularMediana(vetor, TAMANHO_MAX_VETOR);

    printf("Media = %.2f", media);
    printf("\nMediana = %.2f", mediana);
}
```