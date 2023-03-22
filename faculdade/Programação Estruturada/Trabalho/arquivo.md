# Algoritmos

## 1° Atividade

```python
Algoritmo "VerificaIdade"

Var
   idade: inteiro

Inicio
   escreval("Insira sua idade:")
   leia(idade)

   se(idade >= 18) entao
      escreval("Você é maior de idade")
   senao
      escreval("Você é menor de idade")
   fimse

Fimalgoritmo
```
---
## 2° Atividade
```python
Algoritmo "CalcularPotencia"

Var
   base: inteiro
   expoente: inteiro
   resultado: real

Inicio
   escreval("Insira um valor de base:")
   leia(base)
   
   escreval("Insira um valor de expoente:")
   leia(expoente)
   
   resultado <- base ^ expoente
   
   escreval("O resultado é: ", resultado)
Fimalgoritmo
```