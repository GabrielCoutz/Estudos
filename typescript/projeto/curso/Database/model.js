"use strict";
exports.__esModule = true;
exports.Db = void 0;
var Db = /** @class */ (function () {
    function Db() {
        this.nomeTabela = '';
    }
    Db.prototype.inserir = function (object) {
        return true;
    };
    Db.prototype.atualizar = function (object) {
        return true;
    };
    Db.prototype.remover = function (id) {
        return {};
    };
    Db.prototype.selecionar = function (id) {
        return {};
    };
    Db.prototype.selecionarTodos = function () {
        return [];
    };
    return Db;
}());
exports.Db = Db;
