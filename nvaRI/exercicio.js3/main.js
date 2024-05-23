function validarNumeroPositivo() {
    const inputNumero = document.getElementById('numero').value;
    const resultadoElement = document.getElementById('resultado');

    // Verificar se o valor inserido é um número
    if (isNaN(inputNumero)) {
        resultadoElement.textContent = "Erro: Por favor, insira um número válido.";
    } else {
        // Verificar se o número é positivo
        const numero = parseFloat(inputNumero);
        if (numero > 0) {
            resultadoElement.textContent = "O número inserido é positivo!";
        } else {
            resultadoElement.textContent = "Erro: Por favor, insira um número positivo.";
        }
    }
}

document.getElementById('validar').addEventListener('click', validarNumeroPositivo);