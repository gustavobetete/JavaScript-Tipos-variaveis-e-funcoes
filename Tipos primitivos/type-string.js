const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!"
const StringDeNumero = "34567";

const citacao = 'O Gustavo disse "Oi!"';
const citacao2 = "Meu nome é ";

const meuNome = "Gustavo";

//concatenação (+)

console.log(citacao2 + meuNome);

// Conversão do codigo Unicode em caracteres

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Convertendo letras maiusculas em minusculas

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// Para saber quantos caracteres tem em uma string

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres