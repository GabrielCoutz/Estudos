## Recursividade


```c
#include<stdio.h>

int verificarSeNumeroEPrimo(int numero) {
    return numeroEPrimoAuxiliar(numero, 2);
}

int numeroEPrimoAuxiliar(int numero, int divisor) {
    if (divisor == numero) return 1;
    else if (numero % divisor == 0) return 0;
    else return numeroEPrimoAuxiliar(numero, divisor + 1);
}

main() {
    int resultado = 0, numero;

    printf("Insira um numero: ");
    scanf("%d", &numero);

    resultado = verificarSeNumeroEPrimo(numero);
    if (resultado == 1) printf("\nO numero %d e primo.", numero);
    else printf("\nO numero %d nao e primo.", numero);
}
```