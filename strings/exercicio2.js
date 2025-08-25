const cpf = ["12345678901"];
const cnpj = ["12345678000195"];

function formatarCpf(num) {
    if (num.length !== 11) {
        return "CPF inválido - deve ter 11 dígitos";
    }
    return num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatarCnpj(num) {
    if (num.length !== 14) {
        return "CNPJ inválido - deve ter 14 dígitos";
    }
    return num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

function validarDocumento(num) {

    const numeroLimpo = num.toString().replace(/\D/g, '');
    
    if (numeroLimpo.length === 11) {
        return formatarCpf(numeroLimpo);
    }
    if (numeroLimpo.length === 14) {
        return formatarCnpj(numeroLimpo);
    }
    
    return "Documento inválido - deve ter 11 (CPF) ou 14 (CNPJ) dígitos";
}
console.log("CPF:", validarDocumento("coloque aqui"));