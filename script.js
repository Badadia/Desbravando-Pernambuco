const allQuestions = [
  // ================= NÍVEL 1 =================
  {
    level: 1,
    type: "text",
    text: "Qual é a capital do estado de Pernambuco?",
    options: ["Caruaru", "Olinda", "Recife", "Petrolina"],
    correctAnswer: 2,
  },
  {
    level: 1,
    type: "map",
    text: "Onde fica a Região Metropolitana do Recife (RMR), conhecida por abrigar a capital, Olinda, Jaboatão e outras cidades vizinhas? Clique no mapa.",
    correctAnswer: "reg-rmr",
  },
  {
    level: 1,
    type: "text",
    text: "Qual ritmo musical e dança é considerado Patrimônio Imaterial da Humanidade e é o grande símbolo do Carnaval pernambucano?",
    options: ["Samba", "Frevo", "Axé", "Maracatu"],
    correctAnswer: 1,
  },
  {
    level: 1,
    type: "text",
    text: "Qual destas praias fica localizada no município de Ipojuca e é famosa mundialmente por suas piscinas naturais?",
    options: [
      "Boa Viagem",
      "Porto de Galinhas",
      "Praia de Carneiros",
      "Calhetas",
    ],
    correctAnswer: 1,
  },
  {
    level: 1,
    type: "map",
    text: "Esta região é famosa pela grandiosa Festa de São João em Caruaru e pelo Festival de Inverno de Garanhuns. Clique no Agreste.",
    correctAnswer: "reg-agreste",
  },
  {
    level: 1,
    type: "text",
    text: "Qual é o doce pernambucano, reconhecido como patrimônio imaterial, famoso por ser feito com finas camadas de massa e goiabada?",
    options: ["Bolo de Rolo", "Bolo Souza Leão", "Cartola", "Tapioca"],
    correctAnswer: 0,
  },

  // ================= NÍVEL 2 =================
  {
    level: 2,
    type: "text",
    text: "A Revolução Pernambucana foi um movimento que chegou a criar uma república independente separada do Brasil imperial por 74 dias. Em que ano ocorreu?",
    options: ["1817", "1824", "1889", "1500"],
    correctAnswer: 0,
  },
  {
    level: 2,
    type: "map",
    text: "Qual região é caracterizada pelo clima semiárido, vegetação de caatinga e abrange grande parte do interior geográfico do estado? Clique no Sertão.",
    correctAnswer: "reg-sertao",
  },
  {
    level: 2,
    type: "text",
    text: "O município de Brejo da Madre de Deus abriga o maior teatro ao ar livre do mundo (Nova Jerusalém). Em qual mesorregião ele fica?",
    options: ["Sertão", "Zona da Mata", "Agreste", "São Francisco"],
    correctAnswer: 2,
  },
  {
    level: 2,
    type: "text",
    text: "Surgido no Recife nos anos 90, que movimento musical misturava rock, hip hop e maracatu, tendo Chico Science como principal líder?",
    options: ["Tropicália", "Jovem Guarda", "Clube da Esquina", "Manguebeat"],
    correctAnswer: 3,
  },
  {
    level: 2,
    type: "map",
    text: "Petrolina é um gigantesco polo de exportação de frutas (fruticultura irrigada) e produção de vinhos. Clique no mapa na região do São Francisco.",
    correctAnswer: "reg-sao-francisco",
  },
  {
    level: 2,
    type: "text",
    text: "Qual grande escritor paraibano, mas radicado em Pernambuco, foi o autor da famosa peça 'O Auto da Compadecida'?",
    options: [
      "Jorge Amado",
      "Ariano Suassuna",
      "Graciliano Ramos",
      "Machado de Assis",
    ],
    correctAnswer: 1,
  },

  // ================= NÍVEL 3 =================
  {
    level: 3,
    type: "text",
    text: "Qual destas manifestações culturais tem fortes raízes africanas e se divide tradicionalmente em 'Baque Virado' e 'Baque Solto'?",
    options: ["Caboclinhos", "Maracatu", "Coco de Roda", "Ciranda"],
    correctAnswer: 1,
  },
  {
    level: 3,
    type: "map",
    text: "Historicamente dominada pelos engenhos de cana-de-açúcar devido ao seu solo massapê e clima úmido costeiro. Clique na Zona da Mata.",
    correctAnswer: "reg-mata",
  },
  {
    level: 3,
    type: "text",
    text: "Qual batalha histórica, ocorrida no atual município de Jaboatão, foi decisiva para a expulsão dos holandeses de Pernambuco em 1654?",
    options: [
      "Batalha dos Guararapes",
      "Batalha do Tuiuti",
      "Batalha de Monte Caseros",
      "Sabinada",
    ],
    correctAnswer: 0,
  },
  {
    level: 3,
    type: "text",
    text: "Qual religioso e líder político foi fuzilado no Recife por ser um dos principais líderes da Confederação do Equador em 1824?",
    options: ["Tiradentes", "Frei Caneca", "Bento Gonçalves", "Dom Vital"],
    correctAnswer: 1,
  },
  {
    level: 3,
    type: "map",
    text: "Nazaré da Mata é a 'capital do Maracatu Rural', enquanto a Ilha de Itamaracá é o berço da Ciranda. Ambas ficam na parte norte de qual mesorregião?",
    correctAnswer: "reg-mata",
  },
  {
    level: 3,
    type: "map",
    text: "Onde se localiza o poderoso 'Polo de Confecções' de Pernambuco (cidades como Santa Cruz do Capibaribe e Toritama)? Clique no mapa.",
    correctAnswer: "reg-agreste",
  },
]

let activeQuestions = []
let currentQuestionIndex = 0
let score = 0
const pointsPerQuestion = 10
const questionsPerLevel = 3

const startScreen = document.getElementById("start-screen")
const gameScreen = document.getElementById("game-screen")
const endScreen = document.getElementById("end-screen")
const uiLevel = document.getElementById("ui-level")
const uiScore = document.getElementById("ui-score")
const questionText = document.getElementById("question-text")
const optionsContainer = document.getElementById("options-container")
const mapContainer = document.getElementById("map-container")

fetch("mapa_processed.svg")
  .then((r) => r.text())
  .then((svgText) => {
    document.getElementById("svg-wrapper").innerHTML = svgText
    document
      .getElementById("svg-wrapper")
      .addEventListener("click", function (e) {
        const q = activeQuestions[currentQuestionIndex]
        if (q.type !== "map") return

        let el = e.target
        while (el && el !== this) {
          if (el.dataset && el.dataset.region) {
            if (el.dataset.region === q.correctAnswer) {
              handleCorrectAnswer()
            } else {
              handleWrongAnswer()
            }
            return
          }
          el = el.parentElement
        }
      })
  })
  .catch((error) => console.error("Erro ao carregar o mapa SVG:", error))

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function generateRandomMatch() {
  const level1 = allQuestions.filter((q) => q.level === 1)
  const level2 = allQuestions.filter((q) => q.level === 2)
  const level3 = allQuestions.filter((q) => q.level === 3)

  activeQuestions = [
    ...shuffleArray(level1).slice(0, questionsPerLevel),
    ...shuffleArray(level2).slice(0, questionsPerLevel),
    ...shuffleArray(level3).slice(0, questionsPerLevel),
  ]
}

function startGame() {
  generateRandomMatch()
  startScreen.classList.add("hidden")
  gameScreen.classList.remove("hidden")
  currentQuestionIndex = 0
  score = 0
  loadQuestion()
}

function loadQuestion() {
  const q = activeQuestions[currentQuestionIndex]
  uiLevel.innerText = q.level
  uiScore.innerText = score
  questionText.innerText = q.text
  optionsContainer.innerHTML = ""

  if (q.type === "text") {
    mapContainer.classList.add("hidden")
    optionsContainer.classList.remove("hidden")
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button")
      btn.className = "btn btn-outline-primary option-btn"
      btn.innerText = opt
      btn.onclick = () => checkTextAnswer(index)
      optionsContainer.appendChild(btn)
    })
  } else {
    optionsContainer.classList.add("hidden")
    mapContainer.classList.remove("hidden")
  }
}

function checkTextAnswer(selectedIndex) {
  if (selectedIndex === activeQuestions[currentQuestionIndex].correctAnswer) {
    handleCorrectAnswer()
  } else {
    handleWrongAnswer()
  }
}

function handleCorrectAnswer() {
  score += pointsPerQuestion * activeQuestions[currentQuestionIndex].level
  showFeedback(true)
}

function handleWrongAnswer() {
  showFeedback(false)
}

function showFeedback(isCorrect) {
  const overlay = document.getElementById("feedback-overlay")
  const title = document.getElementById("feedback-title")
  const text = document.getElementById("feedback-text")
  const btn = document.getElementById("btn-next-question")

  if (isCorrect) {
    title.innerHTML = "🎉 Correto!"
    title.className = "text-success mb-3"
    text.innerText = "Você mandou muito bem! Ganhou os pontos dessa rodada."
    btn.className = "btn btn-success btn-lg mt-3"
  } else {
    title.innerHTML = "❌ Incorreto!"
    title.className = "text-danger mb-3"
    text.innerText = "Que pena, resposta errada! Vamos para a próxima."
    btn.className = "btn btn-danger btn-lg mt-3"
  }

  overlay.classList.remove("hidden")
}

function nextQuestion() {
  document.getElementById("feedback-overlay").classList.add("hidden")

  currentQuestionIndex++
  if (currentQuestionIndex < activeQuestions.length) {
    loadQuestion()
  } else {
    endGame()
  }
}

function endGame() {
  gameScreen.classList.add("hidden")
  endScreen.classList.remove("hidden")
  document.getElementById("final-score").innerText = score

  const msg = document.getElementById("end-message")

  if (score >= 150) {
    msg.innerText =
      "Excelente! Você é um verdadeiro especialista em Pernambuco, visse?"
  } else if (score >= 80) {
    msg.innerText =
      "Muito bom! Mas ainda dá para conhecer um pouquinho mais da nossa terra."
  } else {
    msg.innerText =
      "Eita! Faltou estudar um pouco mais sobre o Leão do Norte. Tente novamente!"
  }
}
