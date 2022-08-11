// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false); //true
console.log("" == false); //true
console.log(1 == true); // true

// null => vazio ou nada
// undefined => não foi definida

let minhaVar;
let varNull = null;

console.log(minhaVar); // undefined
console.log(varNull) // null

// typeof serve para perguntar pro javascript qual tipo de dado que esta sendo guardado nessa variavel

let numero = 3;
let texto = "Alura";

console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof minhaVar); // undefined
console.log(typeof varNull) // object
