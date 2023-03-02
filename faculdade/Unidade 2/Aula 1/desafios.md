## Tomada de decisões

```c
#include <stdio.h>

main() {
    float salario_bruto, desconto_inss, desconto_ir, salario_liquido;

    printf("\n Calculo de Salario Liquido com desconto do IR e INSS");
    printf("\n Insira seu salario bruto: ");
    scanf("%f", &salario_bruto);

    // Desconto do INSS
    if (salario_bruto <= 1045.0) {
        desconto_inss = salario_bruto * 0.075;
    } else if (salario_bruto <= 2089.60) {
        desconto_inss = salario_bruto * ((float) 9 / (float) 100);
    } else if (salario_bruto <= 3134.40) {
        desconto_inss = salario_bruto * 0.12;
    } else {
        desconto_inss = salario_bruto * 0.14;
    }

    // Desconto do IR
    if (salario_bruto <= 1903.98) {
        desconto_ir = 0;
    } else if (salario_bruto <= 2826.65) {
        desconto_ir = salario_bruto * 0.075;
    } else if (salario_bruto <= 3751.05) {
        desconto_ir = salario_bruto * 0.15;
    } else if (salario_bruto <= 4664.68) {
        desconto_ir = salario_bruto * 0.225;
    } else {
        desconto_ir = salario_bruto * 0.275;
    }

    salario_liquido = salario_bruto - desconto_inss - desconto_ir;
    printf("\n Desconto INSS: R$ %.2f", desconto_inss);
    printf("\n Desconto IR: R$ %.2f", desconto_ir);
    printf("\n Salario liquido: R$ %.2f", salario_liquido);
}
```