let fullDeck = [];
let deck = [];
let currentIndex = 0;

const IMPORTANT_KEY = "importantCards";

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const counterEl = document.getElementById("counter");

function loadDeck() {
  fullDeck = unit1Deck.map((card, index) => ({
    ...card,
    id: index
  }));
  deck = [...fullDeck];
  currentIndex = 0;
  renderCard();
}

function getImportantCards() {
  return JSON.parse(localStorage.getItem(IMPORTANT_KEY)) || [];
}

function saveImportantCards(list) {
  localStorage.setItem(IMPORTANT_KEY, JSON.stringify(list));
}

function toggleImportant() {
  const important = getImportantCards();
  const cardId = deck[currentIndex].id;

  if (important.includes(cardId)) {
    saveImportantCards(important.filter(id => id !== cardId));
  } else {
    important.push(cardId);
    saveImportantCards(important);
  }

  renderCard();
}

function filterByTag() {
  const tag = document.getElementById("tagSelector").value;
  const important = getImportantCards();

  if (tag === "important") {
    deck = fullDeck.filter(card => important.includes(card.id));
  } else if (tag === "all") {
    deck = [...fullDeck];
  } else {
    deck = fullDeck.filter(card => card.tag === tag);
  }

  currentIndex = 0;
  renderCard();
}

function renderCard() {
  if (deck.length === 0) {
    questionEl.textContent = "No cards to show.";
    answerEl.textContent = "";
    counterEl.textContent = "";
    return;
  }

  const card = deck[currentIndex];
  const important = getImportantCards();

  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;
  answerEl.classList.add("hidden");

  counterEl.textContent =
    `Card ${currentIndex + 1} of ${deck.length}` +
    (important.includes(card.id) ? " ⭐" : "");
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

loadDeck();
