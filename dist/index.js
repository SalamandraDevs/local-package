"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
class usserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
exports.usuario = new usserAccount('Odair Augusto Trujillo', 2023);
console.log('Message from module: ', exports.usuario.name);
