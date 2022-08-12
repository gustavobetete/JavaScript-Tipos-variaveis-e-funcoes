// Parâmetros de função
             // 50  // 25 
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(50, 25)); // 75
console.log(soma(2, 2)); // 4
console.log(soma(-500, 60)); // -440

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}

console.log(nomeIdade("Gustavo", 23)); // meu nome é Gustavo, e minha idade é 23


function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(5, 5), soma(3, 3)));