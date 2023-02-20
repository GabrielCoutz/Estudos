"use strict";
exports.__esModule = true;
var model_js_1 = require("./Carro/model.js");
var model_js_2 = require("./Concessionaria/model.js");
var model_js_3 = require("./Pessoa/model.js");
var carroA = new model_js_1["default"]({
    modelo: 'dodge',
    portas: 4
});
var carroB = new model_js_1["default"]({
    modelo: 'veloster',
    portas: 3
});
var carroC = new model_js_1["default"]({
    modelo: 'cerato',
    portas: 4
});
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new model_js_2["default"]({
    endereco: 'Av. Paulista',
    listaDeCarros: listaDeCarros
});
var cliente = new model_js_3["default"]({
    carroPreferido: 'dodge',
    nome: 'João'
});
var carroEncontrado = concessionaria
    .mostrarListaDeCarros()
    .find(function (carro) { return carro.modelo === cliente.dizerCarroPreferido(); });
if (carroEncontrado)
    cliente.comprarCarro(carroEncontrado);
console.log(cliente.dizerCarroQueTem());
