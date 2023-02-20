"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo) {
        this.velocidade = 0;
        this.modelo = modelo;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return "O ve\u00EDculo est\u00E1 a ".concat(this.velocidade, " km/h");
    };
    return Veiculo;
}());
exports["default"] = Veiculo;
