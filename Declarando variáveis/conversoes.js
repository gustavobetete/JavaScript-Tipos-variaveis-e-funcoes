// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // false - pois uma é number e outra é string.  (=== compara valor e tipo)
console.log(numero == numeroString); // true - pois ele converteu o nosso number em string e conferiu se os 2 estão iguais. (== compara valor)
console.log(numero + numeroString); // 456456 - Coloca os valores um na frente do outro

//conversão explícita

// Number() 
// String()
console.log(numero + Number(numeroString)); // 912 - transformou a string em number, então foi somado os dois numeros.