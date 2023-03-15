## O que são funções ou procedimentos?


```c
#include <stdio.h>

float calcularIMC() {
    float peso, altura, imc;

    printf("Insira seu peso: ");
    scanf("%f", &peso);

    printf("\nInsira sua altura: ");
    scanf("%f", &altura);

    imc = peso / (altura * altura);

    return imc;
}

main(){
    float imc = calcularIMC();

    if (imc < 18.5) printf("\nSeu IMC e de: %.2f. Voce esta abaixo do peso.", imc);
    else if (imc < 24.9) printf("\nSeu IMC e de:%.2f. Voce esta no peso ideal.", imc);
    else  printf("\nSeu IMC e de: %.2f. Voce esta com sobrepreso.", imc);
}
```