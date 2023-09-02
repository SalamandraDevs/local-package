interface User {
  name: string;
  id: number;
}

class usserAccount {
  name: string;
  id: number;
  github: string;
  community: string;

  constructor(name: string, id: number, github: string, community: string) {
    this.name = name;
    this.id = id;
    this.github = github;
    this.community = community;
  }
}

export const usuario: User = new usserAccount(
  'Odair Augusto Trujillo',
  2023,
  'OdairTrujillo',
  'https://t.me/salamandradevs'
);

console.log('Message from module: ', usuario.name);
