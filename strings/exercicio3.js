function urlAmigavel(texto) {
  return texto
    .toLowerCase()                       
    .normalize('NFD')                     
    .replace(/[\u0300-\u036f]/g, '')   
    .replace(/[^a-z0-9\s-]/g, '')          
    .trim()                           
    .replace(/\s+/g, '-')           
    .replace(/-+/g, '-');              
}


console.log(urlAmigavel("Aprenda programação do zero hoje")); // << texto aqui

