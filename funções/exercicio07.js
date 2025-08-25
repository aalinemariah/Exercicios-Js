function gerarRelatorio(pessoa) {
  if (pessoa.profissao.toLowerCase() === "desempregado") {
    return `${pessoa.nome} tem ${pessoa.idade} anos, mora em ${pessoa.cidade} e está em busca de oportunidades.`;
  } else {
    return `${pessoa.nome} tem ${pessoa.idade} anos, mora em ${pessoa.cidade} e trabalha como ${pessoa.profissao}.`;
  }
}

const pessoa1 = {
  nome: "Amanda",
  idade: 23,
  cidade: "São Paulo",
  profissao: "Desenvolvedora"
};

const pessoa2 = {
  nome: "Lucas",
  idade: 30,
  cidade: "Rio de Janeiro",
  profissao: "Desempregado"
};

console.log(gerarRelatorio(pessoa1));


console.log(gerarRelatorio(pessoa2));
