"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var model_js_1 = require("../Veiculo/model.js");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(item) {
        var _this = _super.call(this, item.modelo) || this;
        _this.portas = item.portas;
        return _this;
    }
    return Carro;
}(model_js_1["default"]));
exports["default"] = Carro;
