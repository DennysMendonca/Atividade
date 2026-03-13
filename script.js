/*const formulario = document.getElementById('meuForm');

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
        body.style.backgroudColor = "#FFC107";
        document.getElementById("cabecalho").style.backgroudColor = "#333";
        }
    }};
} else {
    console.error("Formulário não encontrado! Verifique se o ID no HTML é 'meuForm'");
}
*/

// Pegando os elementos (Aula 4)
const formulario = document.getElementById("meuForm");
const inputQtd = document.getElementById("quantidade");
const body = document.body;

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Não deixa a página recarregar (Aula 5)

    const total = parseInt(inputQtd.value);

    // 1. Condicional (If/Else)
    if (total <= 0 || isNaN(total)) {
        alert("Ei! Digite um número válido de alunos.");
    } else {
        // 2. Loop (For) - Simulando o sorteio no console
        console.log("Iniciando sorteio...");
        for (let i = 1; i <= 3; i++) {
            console.log("Sorteando em " + i + "...");
        }

        // Gera um número aleatório entre 1 e o total
        const sorteado = Math.floor(Math.random() * total) + 1;

        // 3. Alerta (O que você pediu)
        alert("🗳️ O aluno sorteado foi o número: " + sorteado);

        // 4. Mudando a cor de alguma coisa (Aula 4)
        body.style.backgroundColor = "#FFC107"; // Muda o fundo para amarelo
        document.getElementById("cabecalho").style.backgroundColor = "#333";
    }
});
