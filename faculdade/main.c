#include <stdio.h>


int main () {
  int numero;
  printf("\nInsira um numero: ");
  scanf("%d", &numero);
  switch (numero % 2)
  {
  case 0:
    printf("O numero %d e par", numero);
    break;
  
  default:
  printf("O numero %d e impar", numero);
    break;
  }
  return 0;
}