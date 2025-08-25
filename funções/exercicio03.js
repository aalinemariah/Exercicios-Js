function atualizarEstoque(produto, vendidos) {
  if (vendidos > produto.quantidade) {
    return `Estoque insuficiente para ${produto.nome}.`;
  }

  produto.quantidade -= vendidos;
  return `${produto.nome} agora tem ${produto.quantidade} unidades no estoque.`;
}


let p1 = { nome: "Camisa", quantidade: 5 };

console.log(atualizarEstoque(p1, 2));


console.log(atualizarEstoque(p1, 10));

