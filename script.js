let fullDeck = [];
let deck = [];
let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const counterEl = document.getElementById("counter");

function loadDeck() {
  fullDeck = [...unit1Deck];
  deck = [...fullDeck];
  currentIndex = 0;
  renderCard();
}

function filterByTag() {
  const tag = document.getElementById("tagSelector").value;

  if (tag === "all") {
    deck = [...fullDeck];
  } else {
    deck = fullDeck.filter(card => card.tag === tag);
  }

  currentIndex = 0;
  renderCard();
}

function renderCard() {
  if (deck.length === 0) {
    questionEl.textContent = "No cards for this section.";
    answerEl.textContent = "";
    counterEl.textContent = "";
    return;
  }

  questionEl.textContent = deck[currentIndex].question;
  answerEl.textContent = deck[currentIndex].answer;
  answerEl.classList.add("hidden");
  counterEl.textContent = `Card ${currentIndex + 1} of ${deck.length}`;
}

function showAnswer() {
  answerEl.classList.remove("hidden");
}

function nextCard() {
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    renderCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

function shuffleDeck() {
  deck = deck.sort(() => Math.random() - 0.5);
  currentIndex = 0;
  renderCard();
}

loadDeck();
