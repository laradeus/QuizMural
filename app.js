// Declara variáveis globais
let quiz   = document.querySelector( '.quiz' )
let result = document.querySelector( '.erroouacerto' )
let answer = document.querySelector( '.explicacao' )
let mapa  = document.querySelector( '.mapa' )
let proxima = document.querySelector( '.proxima' )
let anterior = document.querySelector( '.anterior' )
let botoes = document.querySelector( '.botoes' )

// Seleciona todas as <li>
let alternatives = document.querySelectorAll( 'li' )

function verifyAlternatives() {
  let isClicked = false
  for ( let alternative of alternatives ) {

    if(alternative.classList.contains('clicked')) {
      isClicked = true
    }

  }
  return isClicked
}

// Cria função para checar resposta
function checkAnswer( event ) {
  if (verifyAlternatives()) {
    return
  }

  // Desativa clique no quiz
  quiz.classList.add( 'inactive' )

  // Cria variável que representa a alternativa clicada
  let alternative = event.target

  // Aplica classe “clicada” para estilizar via CSS
  alternative.classList.add( 'clicked' )
  

  // Se <li> clicada contém classe “correct”
  if ( alternative.classList.contains( 'correta' ) ) {

    // Troca o texto do resultado por “Acertou :)”
    result.textContent = 'Acertou :)'

    // Aplica cor de “acertou”
    result.style.color = 'Black'

    // Cria variável do localStorage
    let quizCertas = window.localStorage.getItem( "quizCertas" )

    // Cria uma condição dentro da resposta certa em que adiciona um ponto ao localStorage para quem acertou (ou adiciona 1 no caso de primeira pergunta)
    if (quizCertas) {
      window.localStorage.setItem("quizCertas", parseInt(quizCertas) + 1)
    } else {
      window.localStorage.setItem("quizCertas", 1)
    }

  } else {

    // Troca o texto do resultado por Errou :(”
    result.textContent = 'Errou :('

    // Aplica cor de “errou”
    result.style.color = '#f75110'

  }

  // Mostra .answer
  answer.style.display = 'flex'

    // Mostra mapa
  mapa.style.display = 'initial'
  
  //Mostra botão de próxima pergunta
  botoes.style.display = 'flex'


}

// Para cada <li>
for ( let alternative of alternatives ) {

  // Ouve o evento de click e roda a função
  alternative.addEventListener( 'click', checkAnswer )

// Retira a classe "clicada"
  alternative.classList.remove( 'clicked' )
}

