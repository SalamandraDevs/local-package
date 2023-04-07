interface User {
  name: string;
  id: number;
}

class usserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

export const usuario: User = new usserAccount('Odair Augusto Trujillo', 2023);

console.log('Message from module: ', usuario.name);
