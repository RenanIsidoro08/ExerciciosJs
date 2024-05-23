function contarCaracteres(){
    const texto = document.getElementById('caractere').value;
    const numeroDeCaracteres = texto.length;
    const caracteresElement = document.getElementById('caracteres');
    caracteresElement.textContent = `Número de caracteres: ${numeroDeCaracteres}`;
}

document.getElementById('enviar').addEventListener('click', contarCaracteres);
