// tipagem basica
let message: string = 'ts';

console.log(message);

// any, void, never

let stock: any = 90; // evitar usar any.

stock = 0;
console.log(stock);

// void - geralmente utilizado em retorno de função quando n tem retorno.
function showInformation(): void {
    console.info('info');
}

// never - quase nunca é utilizado
function error(): never {
    throw new Error('error...');
}

// array, tuple and enum

let fruits: Array<string> = ['banana', 'uva', 'laranja'];

// maneira mais popular de tipar um array:
let peoples: string[] = ['Felipe', 'Maria', 'Leonara'];

// tuple: é quando já sabemos a quantidade de itens de um array e tipo de cada um deles.
let userData: [number, object, boolean];

let id: number = 1;
let active: boolean = true;

userData = [id, {name: "Felipe"}, active];

// enum: Serve para criar um conjunto de chaves/valores
enum ColorsPallet {
    white = '#fff',
    black = '#000'
}

let white: ColorsPallet = ColorsPallet.white;

console.log(white);

















// Conceito de type union: União de tipos

let age: number | string;

age = 20; // OK
age = 'vinte'; // OK

function pet(string: 'dog' | 'cat' | 'zebra'): void {
    console.log(pet);
}

// pet('burro'); // nao aceita
pet('cat');








// Conceito type alias: apelido de tipo

type Pet = 'dog' | 'cat' | 'zebra';

function displayPet(string: Pet): void {
    console.log(pet);
}

displayPet('cat');









// Conceito type inference: Inferência de tipo

/**
 * A inferência de tipo nada mais é que o auto-assinamento que o TypeScript faz
 * em uma variável quando nenhum tipo é informado, mas pela lógica dá pra saber qual é.
 * 
 * Por Exemplo:
*/

const str = 'Felipe';