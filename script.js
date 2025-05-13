// script.js

const fases = [
  {
    resumo: "Nesta fase, vamos explorar a base emocional da relação: o carinho, a empatia e os sentimentos que vos unem.",
    perguntas: [
      { pergunta: "O que mais te faz sentir amado(a)?", respostas: ["Palavras doces", "Toque carinhoso", "Tempo juntos", "Presentes", "Apoio constante"] },
      { pergunta: "Como preferes expressar o teu amor?", respostas: ["Dizendo que amo", "Através de gestos", "Surpresas", "Sexo", "Cuidando da pessoa"] },
      // ... até 20
    ]
  },
  {
    resumo: "Agora mergulhamos na vossa conexão espiritual, na sintonia invisível e nos valores que partilham.",
    perguntas: [
      { pergunta: "Acreditas que a vossa ligação vai além do físico?", respostas: ["Sim, sem dúvida", "Às vezes sinto isso", "Não penso nisso", "Acho que é físico", "Gostava que fosse mais profundo"] },
      // ... até 20
    ]
  },
  {
    resumo: "A fase física convida a reconhecer o corpo e o prazer como expressão de amor, toque e intimidade.",
    perguntas: [
      { pergunta: "O que mais te excita no teu parceiro?", respostas: ["Olhar", "Beijo", "Corpo", "Palavras", "Toque"] },
      // ... até 20
    ]
  },
  {
    resumo: "Aqui entram as fantasias, o desejo intenso, o que está por explorar. É a vossa zona de curiosidade sexual.",
    perguntas: [
      { pergunta: "Tens curiosidade em explorar práticas como o sexo anal?", respostas: ["Sim, muito", "Com confiança, talvez", "Já experimentei", "Não me atrai", "Nunca pensei nisso"] },
      // ... até 20
    ]
  },
  {
    resumo: "A fase final une cumplicidade, liberdade e partilha sem tabus. Aqui, tudo se revela com verdade e respeito.",
    perguntas: [
      { pergunta: "Como te sentes ao partilhar os teus desejos?", respostas: ["Livre", "Envergonhado(a)", "Excitado(a)", "Com receio", "Aliviado(a)"] },
      // ... até 20
    ]
  }
];

let faseAtual = 0;
let perguntaAtual = 0;
let resultados = [];

const introEl = document.getElementById("intro");
const resumoEl = document.getElementById("phase-summary");
const quizEl = document.getElementById("quiz-container");
const perguntaEl = document.getElementById("question");
const respostasEl = document.getElementById("answers");
const resultadoEl = document.getElementById("result");
const startBtn = document.getElementById("start-btn");

startBtn.onclick = () => {
  introEl.classList.add("hidden");
  mostrarResumo();
};

function mostrarResumo() {
  const resumo = fases[faseAtual].resumo;
  resumoEl.textContent = resumo;
  resumoEl.classList.remove("hidden");
  setTimeout(() => {
    resumoEl.classList.add("hidden");
    mostrarPergunta();
  }, 3000);
}

function mostrarPergunta() {
  quizEl.classList.remove("hidden");
  const pergunta = fases[faseAtual].perguntas[perguntaAtual];
  perguntaEl.textContent = pergunta.pergunta;
  respostasEl.innerHTML = "";
  pergunta.respostas.forEach(resposta => {
    const btn = document.createElement("button");
    btn.textContent = resposta;
    btn.onclick = () => {
      resultados.push(resposta);
      perguntaAtual++;
      if (perguntaAtual < fases[faseAtual].perguntas.length) {
        mostrarPergunta();
      } else {
        perguntaAtual = 0;
        faseAtual++;
        if (faseAtual < fases.length) {
          mostrarResumo();
        } else {
          mostrarResultado();
        }
      }
    };
    respostasEl.appendChild(btn);
  });
}

function mostrarResultado() {
  quizEl.classList.add("hidden");
  let resumoFinal = "Obrigado pelo teu tempo e pela partilha sincera.\n\nO teu perfil mostra que...\n";
  resumoFinal += "(Aqui poderá ser feita uma análise com base em padrões de respostas).";
  resultadoEl.textContent = resumoFinal;
  resultadoEl.classList.remove("hidden");
}
