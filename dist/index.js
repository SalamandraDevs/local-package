class usserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
export const usuario = new usserAccount("Odair Augusto Trujillo", 2020);
console.log("Message from module: ", usuario.name);
