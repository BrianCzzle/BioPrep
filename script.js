
// DOM Elements
const termsContainer = document.getElementById("terms-container");
const quizTypeModal = document.getElementById("quiz-type-modal");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const progressFill = document.getElementById("progress-fill");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");
const reviewBtn = document.getElementById("review-btn");
const reviewContainer = document.getElementById("review-container");
const glossarySearch = document.getElementById("glossary-search");
const glossaryItems = document.getElementById("glossary-items");

let quiz;
let currentTopic = "";
let userAnswers = [];

// Modal Functions
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("flex");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  document.getElementById(id).classList.remove("flex");
}

// Event Listeners
termsContainer.addEventListener("click", (e) => {
  const topic = e.target.closest(".topic-item");
  if (topic && topic.dataset.topic) {
    currentTopic = topic.getAttribute("data-topic");
    quizTypeModal.classList.remove("hidden");
    quizTypeModal.classList.add("flex");
  }
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.add("hidden");
    e.target.classList.remove("flex");
  }
});

// Start Multiple Choice Quiz
document.getElementById("multiple-choice-btn").addEventListener("click", () => {
  if (!questions[currentTopic]) {
    Swal.fire({
      icon: "error",
      title: "No Questions",
      text: "No Multiple Choice questions available for this topic.",
    });
    return;
  }
  const shuffled = shuffleArray(questions[currentTopic]);
  quiz = new Quiz(shuffled, 120);
  quiz.startQuiz();
  closeModal("quiz-type-modal");
  termsContainer.classList.add("hidden");
  quizPage.classList.remove("hidden");
  quizTitle.textContent = currentTopic;
});

// Start Fill-in-the-Blank Quiz
document.getElementById("fill-blank-btn").addEventListener("click", () => {
  if (
    !fillInBlankQuestions[currentTopic] ||
    fillInBlankQuestions[currentTopic].length === 0
  ) {
    Swal.fire({
      icon: "error",
      title: "No Questions",
      text: "No Fill-in-the-Blank questions for this topic.",
    });
    return;
  }
  const shuffled = shuffleArray(fillInBlankQuestions[currentTopic]);
  quiz = new Quiz(shuffled, 120);
  quiz.startQuiz();
  closeModal("quiz-type-modal");
  termsContainer.classList.add("hidden");
  quizPage.classList.remove("hidden");
  quizTitle.textContent = currentTopic;
});

// Glossary Search
glossarySearch.addEventListener("input", () => {
  const searchTerm = glossarySearch.value.toLowerCase();
  const items = glossaryItems.getElementsByClassName("glossary-item");

  Array.from(items).forEach((item) => {
    const term = item.querySelector(".glossary-term").textContent.toLowerCase();
    if (term.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// === LIFE SCIENCES GLOSSARY ===
document.addEventListener("DOMContentLoaded", () => {
  const glossaryItems = document.getElementById("glossary-items");
  const paper1Btn = document.getElementById("paper1Btn");
  const paper2Btn = document.getElementById("paper2Btn");
  const glossarySearch = document.getElementById("glossary-search");

  let currentPaper = "P1";

  function loadGlossary() {
    glossaryItems.innerHTML = "";
    const data = currentPaper === "P1" ? glossaryP1 : glossaryP2;
    data.forEach((item) => {
      const li = document.createElement("li");
      li.className = "glossary-item";
      li.innerHTML = `
        <div class="glossary-term">${item.term}:</div>
        <div class="glossary-definition">${item.definition}</div>
      `;
      glossaryItems.appendChild(li);
    });
  }

  // --- Toggle papers ---
  paper1Btn.addEventListener("click", () => {
    currentPaper = "P1";
    paper1Btn.classList.add("active");
    paper2Btn.classList.remove("active");
    loadGlossary();
  });

  paper2Btn.addEventListener("click", () => {
    currentPaper = "P2";
    paper2Btn.classList.add("active");
    paper1Btn.classList.remove("active");
    loadGlossary();
  });

  // --- Search filter ---
  glossarySearch.addEventListener("input", () => {
    const q = glossarySearch.value.toLowerCase();
    const items = glossaryItems.getElementsByClassName("glossary-item");
    Array.from(items).forEach((item) => {
      const term = item
        .querySelector(".glossary-term")
        .textContent.toLowerCase();
      item.style.display = term.includes(q) ? "block" : "none";
    });
  });

  // Load default (Paper 1)
  loadGlossary();
});

// Shuffle Utility
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class Quiz {
  constructor(questions, timeLimit) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.currentIndex = 0;
    this.score = 0;
    this.timeLeft = timeLimit;
    this.timerInterval = null;
    this.userAnswers = [];
  }

  startQuiz() {
    this.showQuestion();
    this.startTimer();
  }

  showQuestion() {
    const q = this.questions[this.currentIndex];
    questionElement.textContent = q.question;
    optionsContainer.innerHTML = "";

    if (q.type === "multiple-choice") {
      shuffleArray(q.options).forEach((opt) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.addEventListener("click", () => this.selectAnswer(opt, q.answer));
        optionsContainer.appendChild(btn);
      });
    } else {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type answer here";
      optionsContainer.appendChild(input);
      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.addEventListener("click", () =>
        this.selectAnswer(input.value.trim(), q.answer)
      );
      optionsContainer.appendChild(submitBtn);
    }

    this.updateProgress();
  }

  selectAnswer(selected, correct) {
    const isCorrect = selected.toLowerCase() === correct.toLowerCase();

    this.userAnswers.push({
      question: this.questions[this.currentIndex].question,
      userAnswer: selected,
      correctAnswer: correct,
      isCorrect: isCorrect,
    });

    if (isCorrect) {
      this.score++;
      Swal.fire({
        icon: "success",
        title: "Correct!",
        text: "Well done!",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect",
        html: `The correct answer is: <strong>${correct}</strong>`,
        timer: 1500,
        showConfirmButton: false,
      });
    }

    setTimeout(() => {
      this.currentIndex++;
      if (this.currentIndex < this.questions.length) {
        this.showQuestion();
      } else {
        this.endQuiz();
      }
    }, 1500);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const minutes = Math.floor(this.timeLeft / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (this.timeLeft % 60).toString().padStart(2, "0");
      timeElement.textContent = `${minutes}:${seconds}`;

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.endQuiz();
      }
    }, 2000);
  }

  updateProgress() {
    const progress = (
      (this.currentIndex / this.questions.length) *
      100
    ).toFixed(0);
    progressFill.style.width = `${progress}%`;
  }

  endQuiz() {
    clearInterval(this.timerInterval);
    quizPage.classList.add("hidden");
    resultsPage.classList.remove("hidden");
    scoreElement.textContent = `${this.score}/${this.questions.length}`;

    userAnswers = this.userAnswers;

    // ✅ Save quiz results to localStorage
    const result = {
      topic: currentTopic,
      score: Math.round((this.score / this.questions.length) * 100),
      timeSpent: this.timeLimit - this.timeLeft,
      date: new Date().toISOString().split("T")[0],
    };

    let results = JSON.parse(localStorage.getItem("quizResults")) || [];
    results.push(result);
    localStorage.setItem("quizResults", JSON.stringify(results));

    // ✅ Update dashboard
    updateDashboard();
  }
}

// ✅ Calculate Stats
function calculateStats() {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];
  if (results.length === 0)
    return {
      avgScore: 0,
      quizzesCompleted: 0,
      topicsMastered: 0,
      hoursStudied: 0,
      streak: 0,
    };

  let totalScore = 0;
  let totalMinutes = 0;
  let masteredTopics = new Set();

  results.forEach((r) => {
    totalScore += r.score;
    totalMinutes += r.timeSpent / 60;
    if (r.score >= 80) masteredTopics.add(r.topic);
  });

  return {
    avgScore: Math.round(totalScore / results.length),
    quizzesCompleted: results.length,
    topicsMastered: masteredTopics.size,
    hoursStudied: totalMinutes.toFixed(1),
    streak: calcStreak(results),
  };
}

function calcStreak(results) {
  let dates = [...new Set(results.map((r) => r.date))].sort(
    (a, b) => new Date(b) - new Date(a)
  );
  let streak = 0;
  let today = new Date();

  for (let i = 0; i < dates.length; i++) {
    let expected = new Date();
    expected.setDate(today.getDate() - i);
    let expectedStr = expected.toISOString().split("T")[0];
    if (dates.includes(expectedStr)) {
      streak++;
    } else break;
  }
  return streak;
}

// ✅ Update Dashboard UI
function updateDashboard() {
  const stats = calculateStats();

  document.querySelector(".stat-card:nth-child(1) h3").textContent =
    stats.avgScore + "%";
  document.querySelector(".stat-card:nth-child(2) h3").textContent =
    stats.quizzesCompleted;
  document.querySelector(".stat-card:nth-child(3) h3").textContent =
    stats.topicsMastered;
  document.querySelector(".stat-card:nth-child(4) h3").textContent =
    stats.hoursStudied;
  document.querySelector(".streak span").textContent =
    stats.streak + "-day streak";
}

// Retry/Reset/Review
retryBtn.addEventListener("click", () => {
  resultsPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  const shuffled = shuffleArray(
    questions[currentTopic] || fillInBlankQuestions[currentTopic]
  );
  quiz = new Quiz(shuffled, 120);
  quiz.startQuiz();
  quizTitle.textContent = currentTopic;
});

homeBtn.addEventListener("click", () => {
  resultsPage.classList.add("hidden");
  reviewContainer.classList.add("hidden");
  termsContainer.classList.remove("hidden");
});

reviewBtn.addEventListener("click", () => {
  reviewContainer.classList.toggle("hidden");
  if (!reviewContainer.classList.contains("hidden")) {
    reviewContainer.innerHTML = "<h3>Review Your Answers</h3>";

    userAnswers.forEach((answer, index) => {
      const item = document.createElement("div");
      item.classList.add("review-item");
      item.classList.add(answer.isCorrect ? "correct" : "incorrect");

      item.innerHTML = `
            <div class="review-question">${index + 1}. ${answer.question}</div>
            <div class="review-answer">Your answer: ${answer.userAnswer}</div>
            <div class="review-correct">Correct answer: ${
              answer.correctAnswer
            }</div>
          `;

      reviewContainer.appendChild(item);
    });
  }
});
updateDashboard();

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("✅ Service Worker Registered"))
    .catch((err) => console.log("SW registration failed:", err));
}
document.querySelectorAll(".qa-card").forEach((card) => {
  card.addEventListener("click", () => {
    const action = card.querySelector("h3").textContent;
    switch (action) {
      case "Start Study Mode":
        alert("Study Mode coming soon 🔥");
        break;
      case "Ask CzzleBot":
        document.getElementById("chat-toggle").click(); // opens chatbot
        break;
      case "Quick Quiz":
        alert("Quick Quiz feature loading ⚡");
        break;
    }
  });
});
