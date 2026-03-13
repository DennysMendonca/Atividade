const formulario = document.getElementById('meuForm');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        const inputQuantidade = document.getElementById('quantidade');
        const quantidade = parseInt(inputQuantidade.value);

        if (quantidade > 0) {
            const resultado = Math.floor(Math.random() * quantidade) + 1;
            alert("🎊O aluno sorteado foi: " + resultado);
        } else {
            alert("Por favor, digite um número de alunos válido.");
        }
    });
} else {
    console.error("Formulário não encontrado! Verifique se o ID no HTML é 'meuForm'");
}
