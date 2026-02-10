let fullDeck = [];
let deck = [];
let currentIndex = 0;
let currentUnit = "unit1";

const IMPORTANT_KEY = "importantCards";

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const counterEl = document.getElementById("counter");

function loadDeck() {
  currentUnit = document.getElementById("deckSelector").value;

  let sourceDeck = [];

  if (currentUnit === "unit1") {
    sourceDeck = unit1Deck;
  } else if (currentUnit === "unit2") {
    sourceDeck = unit2Deck;
  }

  fullDeck = sourceDeck.map((card, index) => ({
    ...card,
    id: `${currentUnit}-${index}` // unique across units
  }));

  deck = [...fullDeck];
  currentIndex = 0;
  renderCard();
}

function getImportantCards() {
  const stored = JSON.parse(localStorage.getItem(IMPORTANT_KEY)) || {};
  return stored[currentUnit] || [];
}

function saveImportantCards(list) {
  const stored = JSON.parse(localStorage.getItem(IMPORTANT_KEY)) || {};
  stored[currentUnit] = list;
  localStorage.setItem(IMPORTANT_KEY, JSON.stringify(stored));
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

// Initial load
loadDeck();
