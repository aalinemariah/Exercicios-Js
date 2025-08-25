function validarArquivo(nomeArquivo) {

  const extensoesValidas = ["jpg", "jpeg", "gif", "png"];

  const partes = nomeArquivo.toLowerCase().split(".");
  const extensao = partes.pop();

  if (extensoesValidas.includes(extensao)) {
    return "Arquivo válido";
  } else {
    return "Arquivo inválido";
  }
}


console.log(validarArquivo("familia-wheels.pdf"));


console.log(validarArquivo("familia-wheels.png"));

