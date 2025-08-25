
function processarPedido(pedido, mensagem) {
  mensagem(pedido); 
}


function confirmar(pedido) {
  console.log(`Pedido de ${pedido.cliente} no valor de R$${pedido.valor} confirmado.`);
}


function cancelar(pedido) {
  console.log(`Pedido de ${pedido.cliente} cancelado.`);
}


const pedido1 = { cliente: "Maria", valor: 120 };

processarPedido(pedido1, confirmar);


processarPedido(pedido1, cancelar);
