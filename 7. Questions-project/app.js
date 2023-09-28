// Selectors
const questionItems = [
  {
    question: "do you accept all major credit cards?",
    questionText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    question: "do you suppport local farmers?",
    questionText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    question: "do you use organic ingredients?",
    questionText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
];

let questions;
const secCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayArticle(questionItems);
  const questions = secCenter.querySelectorAll(".question");

  questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    
    btn.addEventListener("click", function() {
        
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
  })
});

function displayArticle(questionItems) {
  let questionItem = questionItems
    .map(function (item) {
      return `<article class="question">
        <!-- question title -->
        <div class="question-title">
          <p>${item.question}</p>
          <button type="button" class="question-btn">
            <span class="plus-icon">
              <i class="far fa-plus-square"></i>
            </span>
            <span class="minus-icon">
              <i class="far fa-minus-square"></i>
            </span>
          </button>
        </div>
        <!-- question text -->
        <div class="question-text">
          <p>
            ${item.questionText};
          </p>
        </div>
      </article>`;
    })
    .join("");

  secCenter.innerHTML = questionItem;
}
