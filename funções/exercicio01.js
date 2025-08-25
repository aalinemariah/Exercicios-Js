function gerarFrase(nome, cidade, profissao = "Estudante") {
  return `Meu nome é ${nome}, moro em ${cidade} e trabalho como ${profissao}.`;
}


console.log(gerarFrase("Amanda", "São Paulo", "Desenvolvedora"));


console.log(gerarFrase("Lucas", "Rio de Janeiro"));

