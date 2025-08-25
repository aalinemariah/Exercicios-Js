const emails = [
    "maria@exemplo.com",
    "maria.santos@exemplo.com.br", 
    "maria@exemplo",
    ".maria@exemplo.com",
    "maria.@exemplo.com",
    "maria@exemplo.com.",

];

function emailValido (email){
    if (typeof email !== "string") return false;

    const temArroba = email.includes('@');
    const temPonto = email.includes('.');
    const comecaComPonto = email.startsWith('.');
    const terminaComPonto = email.endsWith('.');

    return temArroba && temPonto && !comecaComPonto && !terminaComPonto;

}

const emailValidoRegex = (email) => /^(?!\.)(?=.*@)(?=.*\.).*[^.]$/.test(email);

emails.forEach(e => {
    console.log(`${e} -> Função: ${emailValido(e)} | Regex: ${emailValidoRegex(e)}`);
});