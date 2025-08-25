function gerarNickname(nome) {
  return "@" + nome
    .toLowerCase()         
    .replace(/\s+/g, '')  
    .slice(0, 12);          
}

console.log(gerarNickname("Sharonwheels")); // @sharonwheels
