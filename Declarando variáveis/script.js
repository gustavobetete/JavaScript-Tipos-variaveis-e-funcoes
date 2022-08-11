// var   -- atualmente não é mais utilizada, é melhor usar let ou const

var altura = 5;
var comprimento = 7;

area = altura * comprimento; // pode por assim direto, o javaScript ja entende que é uma variavel
console.log(area); // 35
var area; // ou voce pode passar a variavel dpois tambem. (vantagem do var)

// let

let forma = 'retângulo';
let altura1 = 5;
let comprimento1 = 7;
let area1;

if (forma === 'retângulo') {
    area1 = altura * comprimento;
}else {
    area1 = altura * comprimento / 2 
}

console.log(area1); // 35

// const

const forma1 = 'triangulo';
const altura2 = 5;
const comprimento2 = 7;
let area2;

if (forma1 === 'quadrado') {
     area2 = altura2 * comprimento2;
} else {
     area2 = altura2 * comprimento2 / 2; 
}
 
console.log(area2); // 17.5