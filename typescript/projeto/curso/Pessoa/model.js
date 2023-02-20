"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(item) {
        this.nome = item.nome;
        this.carroPreferido = item.carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
        return this.carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        if (this.carro)
            return this.carro;
        return 'Não possuo nenhum carro';
    };
    return Pessoa;
}());
exports["default"] = Pessoa;
