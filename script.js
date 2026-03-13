// Seleciona o formulário e escuta o evento de "submit" (envio)
const formulario = document.getElementById('meuForm');

formulario.addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault();

    // Pega o valor digitado no input
    const quantidadeAlunos = document.getElementById('quantidade').value;

    // Converte para número e valida se é maior que zero
    const total = parseInt(quantidadeAlunos);

    if (total > 0) {
        // Gera um número aleatório entre 1 e o total de alunos
        const numeroSorteado = Math.floor(Math.random() * total) + 1;

        // Exibe o resultado
        alert("O número sorteado foi: " + numeroSorteado + "! 🎉");
    } else {
        alert("Por favor, insira um número válido de alunos.");
    }
});
