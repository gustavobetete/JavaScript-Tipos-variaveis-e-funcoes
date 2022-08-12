/*
let x = "";
console.log(x);
x = "oi";
*/

// DECLARAÇÃO DE FUNÇÃO

// 1-) declara a função
                      // string
function imprimeTexto(texto){
    console.log(texto);
}

// 2-) executa a função (1 ou + vezes)

imprimeTexto("Oi");
imprimeTexto("Outro texto");

// 3º formas de escrever funções

function soma() {
    const resultado = 2 + 2;
    console.log(resultado);
}

function soma1() {
    return 2 + 2;
}

soma(); // 4
console.log(soma1()); // 4



