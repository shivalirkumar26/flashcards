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
  } else if (currentUnit === "unit3") {
    sourceDeck = unit3Deck;
  } else if (currentUnit === "unit4") {
    sourceDeck = unit4Deck;
  } else if (currentUnit === "unit5") {
    sourceDeck = unit5Deck;
  } else if (currentUnit === "unit6") {
    sourceDeck = unit6Deck;
  } else if (currentUnit === "unit7") {
    sourceDeck = unit7Deck;
  } 

  // Create unique IDs per unit
  fullDeck = sourceDeck.map((card, index) => ({
    ...card,
    id: `${currentUnit}-${index}`
  }));

  deck = [...fullDeck];
  currentIndex = 0;

  renderCard();
}

/* =============================
   IMPORTANT CARD STORAGE (SAFE)
   ============================= */

function getImportantCards() {
  const raw = localStorage.getItem(IMPORTANT_KEY);

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);

    // If old array format exists → reset
    if (Array.isArray(parsed)) {
      localStorage.removeItem(IMPORTANT_KEY);
      return [];
    }

    return parsed[currentUnit] || [];
  } catch {
    // Corrupted storage → reset
    localStorage.removeItem(IMPORTANT_KEY);
    return [];
  }
}

function saveImportantCards(list) {
  const raw = localStorage.getItem(IMPORTANT_KEY);
  let stored = {};

  try {
    stored = raw ? JSON.parse(raw) : {};
  } catch {
    stored = {};
  }

  stored[currentUnit] = list;
  localStorage.setItem(IMPORTANT_KEY, JSON.stringify(stored));
}

/* =============================
   TOGGLE IMPORTANT
   ============================= */

function toggleImportant() {
  if (deck.length === 0) return;

  const important = getImportantCards();
  const cardId = deck[currentIndex].id;

  let updated;

  if (important.includes(cardId)) {
    updated = important.filter(id => id !== cardId);
  } else {
    updated = [...important, cardId];
  }

  saveImportantCards(updated);

  // If currently filtering "Important only", refresh deck
  if (document.getElementById("tagSelector").value === "important") {
    filterByTag();
  } else {
    renderCard();
  }
}

/* =============================
   FILTERING
   ============================= */

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

/* =============================
   RENDERING
   ============================= */

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

/* =============================
   NAVIGATION
   ============================= */

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

/* =============================
   INITIAL LOAD
   ============================= */

loadDeck();
