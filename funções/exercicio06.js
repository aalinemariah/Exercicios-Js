//O código abaixo está com nome ruim e várias responsabilidades.
//Separe em funções menores e dê nomes claros:

function coisa(a, b) {
  console.log(a + b);
  if (a + b > 10) {
    console.log("Número grande");
  } else {
    console.log("Número pequeno");
  }
}

// correção
function somar(a, b) {
  return a + b;
}

function classificarNumero(numero) {
  if (numero > 10) {
    return "Número grande";
  } else {
    return "Número pequeno";
  }
}

function exibirResultado(a, b) {
  const resultado = somar(a, b);
  console.log(resultado);
  console.log(classificarNumero(resultado));
}


exibirResultado(3, 4);

exibirResultado(8, 5);
