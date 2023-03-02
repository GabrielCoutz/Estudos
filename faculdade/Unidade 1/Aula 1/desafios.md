## Introdução aos algoritmos

```portugol
Algoritmo "Verifica classificação indicativa"

Var
  idade_cliente, classificacao_indicativa: Inteiro

Inicio
  Escreval("Insira sua idade: ")
  Leia(idade_cliente)
  Escreval("Insira a classificação indicativa do filme que deseja alugar: ")
  Leia(classificacao_indicativa)
  se (idade_cliente <= classificacao_indicativa) entao
    Escreval("Este filme não é indicado para sua idade.")
  senao
    Escreval("Você tem idade para assistir! Tenha um bom filme =)")
  fimse

Fimalgoritmo
```