function calcularAreaRetangulo() {
    const comprimento = document.getElementById('comprimento').value;
    const largura = document.getElementById('largura').value;
    const areaElement = document.getElementById('area');

   
    if (isNaN(comprimento) || isNaN(largura)) {
        areaElement.textContent = "Erro: Insira valores numéricos para o comprimento e a largura.";
    } else {
       
        const area = parseFloat(comprimento) * parseFloat(largura);
        areaElement.textContent = `A área do retângulo é: ${area}`;
    }
}

document.getElementById('calcular').addEventListener('click', calcularAreaRetangulo);