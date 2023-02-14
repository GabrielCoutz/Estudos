# Instalação

1 - rode `npm i commitizen cz-conventional-changelog --save-dev`

2 - Adicione esta config no arquivo `package.json`:

```
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

3 - Após dar `git add ...` rode `git cz`

---

# Tipos

## feat

Utilizado quando se adiciona alguma nova funcionalidade do zero ao código/serviço/projeto.

Ex: `Adição de um novo endpoint para uma API REST ou um novo consumer para um serviço de mensageria.`

## fix

Usado quando existem erros de código que estão causando bugs.

Ex: `Proteção de uma variável que está gerando um NullPointerException em produção.`

## refactor

Utilizado na realização de uma refatoração que não causará impacto direto no código ou em qualquer lógica/regra de negócio.

Ex: `Melhorias de performance revisadas em um code review.`

## style

Utilizado quando são realizadas mudanças no estilo e formatação do código que não irão impactar em nenhuma lógica do código.

Ex: `Realizar a indentação de um código.`

## test

Usado quando se realizam alterações de qualquer tipo nos testes, seja a adição de novos testes ou a refatoração de testes já existentes.

Ex: `Adição de testes de contrato e modificação de testes unitários.`

## doc

Ideal para quando se adiciona ou modifica alguma documentação no código ou do repositório em questão.

Ex: `Adição de documentação sobre o response de uma API ou adição de um README.md.`

## env

Utilizado quando se modifica ou adiciona algum arquivo de CI/CD.

Ex: `Modificar um comando do Dockerfile ou adicionar um step a um Jenkinsfile.`

## build

Usado quando se realiza alguma modificação em arquivos de build e dependências.

Ex: `Adição de dependências do Apache Kafka.`

## chore

Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção.

Ex: `Implementação do Gulp`
