// Dados das perguntas
const questions = [
    {
      id: 1,
      text: "Nova Russas é um município brasileiro do estado do Ceará situado no oeste do estado. localizada na microrregião do Sertão de Crateús, com uma população estimada em:",
      options: [
        { text: "Mais de 40 mil habitantes e possuindo uma área de 642,4 km².", correct: false },
        { text: "Mais de 29 mil habitantes e possuindo uma área de 942,4 km²", correct: false },
        { text: "Mais de 31 mil habitantes e possuindo uma área de 742,4 km².", correct: true },
        { text: "Mais de 42 mil habitantes e possuindo uma área de 542,4 km².", correct: false },
      ],
      answered: false,
    },
    {
      id: 2,
      text: "O Rio Curtume ao longo dos anos esteve sempre presente na vida de vários moradores, mas o crescimento urbano e da população, gerou-se muitos problemas ambientais, como por exemplo:",
      options: [
        { text: "A falta de conscientização, a poluição aos arredores do rios.", correct: true },
        { text: "A pouca chuva que vem afetando o rio curtume ao longo desses anos.", correct: false },
        { text: "Ao longo desses anos o rio curtume teve poucas mudanças prejudiciais.", correct: false },
        { text: "Apenas os lixos que a população tem jogado nas suas margens.", correct: false },
      ],
      answered: false,
    },
    {
      id: 3,
      text: "O Clima de Nova Russas é típico das regiões do Nordeste.",
      options: [
        { text: "Clima subtropical úmido com com dois períodos chuvosos.", correct: false },
        { text: "Clima tropical continental, com duas estações bem definidas, o verão chuvoso e o inverno seco.", correct: false },
        { text: "Clima tropical úmido com temperaturas altas.", correct: false },
        { text: "Clima tropical quente com pluviuosidade média de 848,8 mm.", correct: true },
      ],
      answered: false,
    },
    {
      id: 4,
      text: "O município pertence a qual bacia hidrográfica?",
      options: [
        { text: "Bacia hidrográfica do Acaraú e Parnaíba.", correct: true },
        { text: "Bacia hidrográfica do Acaraú e Paraíba.", correct: false },
      ],
      answered: false,
    },
    {
      id: 5,
      text: "O município de Nova Russas possui características marcante da vegetação da caatinga, composta por:",
      options: [
        { text: "Árvores, arbustos, gramíneas, cactos, orquídeas e cipós.", correct: false },
        { text: "Árvores e arbustos, folhas pequenas ricas em espinhos cactáceas.", correct: true },
      ],
      answered: false,
    },
    {
      id: 6,
      text: "Qual o principal rio que banha a cidade ofertando uma variedade de flora e fauna que pode ser observado no centro urbano de Nova Russas?",
      options: [
        { text: "Rio Poti.", correct: false },
        { text: "Rio Diamante.", correct: false },
        { text: "Rio Jatobá.", correct: false },
        { text: "Rio Curtume.", correct: true },
      ],
      answered: false,
    },
    {
      id: 7,
      text: "O município de Nova Russas possui no ano de 2023 uma população estimada de 30.699 habitantes. Mas de acordo com IBGE no ano de 2017 a população era de:",
      options: [
        { text: "32.035 habitantes, o que demonstra uma pequena taxa de diminuição anual da população.", correct: true },
        { text: "32.035 habitantes, o que demonstra uma alta taxa de aumento da população.", correct: false },
      ],
      answered: false,
    },
    {
      id: 8,
      text: "Em Nova Russas observa-se um elevado percentual das arborização existentes nas ruas, praças e avenidas é composta por árvores pertencentes à família Meliaceae, sendo nativa da Índia, introduzida no Brasil oficialmente em 1984 podendo ser encontrada nas diversas regiões do Brasil.",
      options: [
        { text: "Jamelão (Syzygium cumini), da Índia.", correct: true },
        { text: "Nim Indiano (Azadirachta indica A. Jus).", correct: false },
      ],
      answered: false,
    },
    {
      id: 9,
      text: "Em relação a flora há uma variedade de espécies e famílias que aparecem com mais frequência:",
      options: [
        { text: "Meliaceae, a Moraceae, a Fabaceae, e a Minosaceae.", correct: true },
        { text: "Acácia, o eucalipto e o pinus", correct: false },
        { text: "Araucária ou Pinheiro-do-paraná (Araucaria angustifolia).", correct: false},
        { text: "Mamona (Ricinus communis) e Quaresmeira (Tibouchina granulosa).", correct: false},
      ],
      answered: false,
    },
    {
      id: 10,
      text: "Nim Indiano (Azadirachta indica A. Jus) é uma espécie predominante também em outras cidades da região Nordeste e do Ceará. Qual a explicação dessa espécie ser tão presente na região semiárida?",
      options: [
        {text: "Por ter uma boa adaptação, possuir um crescimento lento, pois precisa de muita água.", correct: false},
        {text: "Por ter uma boa adaptação a região, possui um crescimento rápido, fornecendo sombra em pouco tempo de plantio.", correct: true},
      ],
      answered: false,
    },
    {
      id: 11,
      text: "Outra espécie bastante presente é o sempre verde (Ficus benjamina L.) que pertence a família:",
      options: [
        { text: "Meliaceae", correct: false},
        { text: "Moraceae", correct: true},
        { text: "Fabaceae", correct: false},
        { text: "Minosaceae", correct: false},
      ],
      answered: false,
    },
    {
      id: 12,
      text: "As espécies mais frequentemente  encontradas no município de Nova Russas na família das FABACEAE.",
      options: [
        { text: "Acácia Amarela (Acacia podalyriifolia), Mata Fome ( Acacia obliquifolia)", correct: true},
        { text: "Algabora (Prosopis juliflora(Sw.) DC), Sempre verde (Ficus benjamina L.", correct: false},
      ],
      answered: false,
    }, 
    {
      id: 13,
      text: "Acacia obliquifoliaé uma espécie de leguminosa do gênero Acacia, pertencente à família Fabaceae conhecida pelo nome mata-fome, e em algumas partes do Nordeste brasileiro é chamada de:",
      options: [
        { text: "Branquinha", correct: false},
        { text: "Jumentinha", correct: true},
      ],
      answered: false,
    },
    {
      id: 14,
      text: "Observou-se a ocorrência dessa espécie em vários locais, sendo essa a terceira mais frequente dentre as espécies encontradas, principalmente nas praças, mas também na arborização de ruas e avenidas",
      options: [
        { text: "Algabora", correct: false},
        { text: "Sempre Verde", correct: false},
        { text: "Flambion", correct: false},
        { text: "Acácia Amarela", correct: true},
      ],
      answered: false,
    }, 
    {
      id: 15,
      text: "Por que é importante plantar plantas nativas da região?",
      options: [
        { text: "Porque ajuda a preservar a biodiversidade, a melhorar o solo e a água, e a combater as mudanças climáticas", correct: true},
        { text: "São importantes mas se prolifeferam sem controle, podem representar uma ameaça para a biodiversidade", correct: false},
      ],
      answered: false,
    },
  ]

// variáveis
let currentScore = 0
let errorCount = 0
let currentQuestionId = null

// === ELEMENTOS DOM ===
const startScreen = document.getElementById("start-screen")
const selectionScreen = document.getElementById("selection-screen")
const questionDetailScreen = document.getElementById("question-detail-screen")
const resultScreen = document.getElementById("result-screen")

const startBtn = document.getElementById("start-btn")
const menuBtn = document.getElementById("menu-btn")
const backToStartBtn = document.getElementById("back-to-start")
const backToQuestionsBtn = document.getElementById("back-to-questions")
const playAgainBtn = document.getElementById("play-again")

const scoreDisplay = document.getElementById("score")
const errorsDisplay = document.getElementById("mistakes")
const finalScoreDisplay = document.getElementById("final-score")
const resultMessage = document.getElementById("result-message")

const questionBoxes = document.querySelectorAll(".question-box")
const questionText = document.getElementById("question-text")
const optionsContainer = document.getElementById("options-container")

// funções das telas
function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active")
    s.classList.add("hidden")
  })
  screen.classList.remove("hidden")
  screen.classList.add("active")
}

function goBackToSelection() {
  showScreen(selectionScreen)
}

function goBackToStart() {
  showScreen(startScreen)
}

// zera td p começar dnv
function initGame() {
  currentScore = 0
  errorCount = 0
  updateScoreDisplay()

  questions.forEach((question) => {
    question.answered = false
  })

  questionBoxes.forEach((box) => {
    box.classList.remove("answered", "correct", "wrong", "not-answered")
    box.classList.add("not-answered")
  })

  showScreen(startScreen) 
}


function updateScoreDisplay() {
  scoreDisplay.textContent = currentScore
  errorsDisplay.textContent = errorCount
  finalScoreDisplay.textContent = currentScore
}

function showQuestionDetail(id) {
  const question = questions.find(q => q.id === id)
  if (!question) return

  questionText.textContent = question.text
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const btn = document.createElement("button")
    btn.classList.add("option")
    btn.textContent = option.text

    btn.addEventListener("click", () => {
      handleOptionClick(option, btn, question)
    })

    optionsContainer.appendChild(btn)
  })

  showScreen(questionDetailScreen)
}

function handleOptionClick(option, element, question) {
  if (question.answered) return

  question.answered = true
  const box = document.querySelector(`.question-box[data-question="${question.id}"]`)
  if (box) {
    box.classList.remove("not-answered")
    box.classList.add("answered")
    box.classList.add(option.correct ? 'correct' : 'wrong')
  }

  const allOptions = document.querySelectorAll(".option")
  allOptions.forEach(opt => opt.style.pointerEvents = "none")

  if (option.correct) {
    element.classList.add("correct")
    currentScore += 100
  } else {
    element.classList.add("incorrect")
    errorCount++
    // mostrar a correta
    allOptions.forEach((btn, idx) => {
      if (question.options[idx].correct) {
        btn.classList.add("correct")
      }
    })
  }

  updateScoreDisplay()

  setTimeout(() => {
    showScreen(selectionScreen)
    checkGameCompletion()
}, 1500)
} 

function restartQuiz() {
  initGame()
  showScreen(selectionScreen)
}

function checkGameCompletion() {
  const allAnswered = questions.every(q => q.answered)
  if (allAnswered) {
    showGameResult(true)
  }
}

function showGameResult(completed) {
  resultMessage.textContent = completed
    ? "Parabéns! Você completou o quiz sobre a Biodiversidade de Nova Russas."
    : "Você errou 3 perguntas. Tente novamente!"

  finalScoreDisplay.textContent = currentScore
  showScreen(resultScreen)
}

// eventos
startBtn.addEventListener("click", () => showScreen(selectionScreen))
backToStartBtn?.addEventListener("click", () => goBackToStart())
backToQuestionsBtn?.addEventListener("click", () => goBackToSelection())
playAgainBtn?.addEventListener("click", () => {
  initGame()
  showScreen(startScreen) 
})

questionBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const id = parseInt(box.getAttribute("data-question"))
    const question = questions.find(q => q.id === id)
    if (question && !question.answered) {
      showQuestionDetail(id)
    }
  })
})

initGame()