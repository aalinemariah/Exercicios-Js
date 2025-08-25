const aluno = {
  nome: "João",
  notas: [8, 7, 6]
};

function calcularMedia(aluno) {
  const { nome, notas } = aluno;
  

  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;
  

  const situacao = media >= 7 ? "Aprovado" : "Reprovado";
  

  return `${nome} tem média ${media.toFixed(0)} e foi ${situacao}.`;
}

console.log(calcularMedia(aluno));