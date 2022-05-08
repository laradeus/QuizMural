// Cria variáveis de acerto para a contagem dos acertos a ser mostrada na última página

let acertos = document.getElementById("acertos");
let quizCertas = document.createTextNode(window.localStorage.getItem("quizCertas"));

// Soma os acertos
acertos.appendChild(quizCertas);

// Cria uma função para zerar as respostas (a ser aplicada no botão de voltar ao início)

function resetQuiz() {
    window.localStorage.setItem("quizCertas", 0)
}
