
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
        alert("🎉 O aluno sorteado foi o número: " + sorteado);

        // 4. Mudando a cor de alguma coisa (Aula 4)
        body.style.backgroundColor = "#FFC107"; // Muda o fundo para amarelo
        document.getElementById("cabecalho").style.backgroundColor = "#333";
    }
});
