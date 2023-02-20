"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(item) {
        this.endereco = '';
        this.listaDeCarros = [];
        this.endereco = item.endereco;
        this.listaDeCarros = item.listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
