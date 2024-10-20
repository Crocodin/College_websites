const quizData = [
  {
      question: "Inventatorul motorului cu reacţie a fost?",
      a: "Traian Vuia",
      b: "Aurel Vlaicu",
      c: "Elie Carafoli",
      d: "Henri Coandă",
      correct: "d",
  },
  {
      question: "Cine a fost primul om care a reușit să zboare cu un aparat mai greu decât aerul?",
      a: "Traian Vuia",
      b: "Aurel Vlaicu",
      c: "Elie Carafoli",
      d: "Henri Coandă",
      correct: "a",
  },
  {
      question: "Ce inveții a mai făcut Traian Vuia de-a lungul vieții sale?",
      a: "Mașină de tuns iarba",
      b: "O motocicletă",
      c: "Avionul cu reacție",
      d: "Primul avion",
      correct: "a",
  },
  {
      question: "A construit primul avion românesc?",
      a: "Traian Vuia",
      b: "Elie Carafoli",
      c: "Aurel Vlaicu",
      d: "Henri Coandă",
      correct: "c",
  },
  {
    question: 'A folosit "sistemul lui Cantilever"?',
    a: "Anghel Saligny",
    b: "Elie Carafoli",
    c: "Frank Lloyd Wright",
    d: "Henri Coandă",
    correct: "a",
  },
  {
    question: "Se află pe bancnota de 50 de lei?",
    a: "Elie Carafoli",
    b: "Aurel Vlaicu",
    c: "Anghel Saligny",
    d: "Henri Coandă",
    correct: "b",
  },
  {
    question: "Cine a terminat construcția lui 'Vlaicu III'?",
    a: "Traian Vuia",
    b: "Prietenii lui Aurel Vlaicu",
    c: "Traian Vuia împreună cu Henri Coandă ",
    d: "Nu a fost terminat fiind furat de Naziști",
    correct: "b",
  },
  {
    question: "Cine a construit Podul Regele Carol I?",
    a: "Elie Carafoli",
    b: "Aurel Vlaicu",
    c: "Anghel Saligny",
    d: "Henri Coandă",
    correct: "c",
  },
];

let Quiz = document.getElementsByClassName('quiz')[0];
let End_rez = document.getElementsByClassName('end-result')[0];
let answers = document.querySelectorAll('.answer');
let questions = document.getElementById('question_text');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let submitBtn = document.getElementById('next');

let currentQuiz = 0;
let score = 0;
let ok = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers(); // Remove the classes from all answer elements
  const currentQuizData = quizData[currentQuiz];
  questions.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answers.forEach(option => {
    option.classList.remove('correct', 'wrong', 'no-hover');
  });
  End_rez.classList.add("invizibil");
  ok = 0;
}

submitBtn.addEventListener('click', () => {
  currentQuiz++;
  if(currentQuiz < quizData.length) loadQuiz();
  else {
    Quiz.classList.add('end-of-quiz');
    End_rez.classList.remove("invizibil");
    document.getElementById('end-text').innerHTML = `
      <article>
        <h3>Ai răspuns la ${score}/${quizData.length} întrebări corect</h3>
      </article>
      <article>
        <div class="end-txete">
          <div onclick="location.reload()" class="at-the-end">Încearcă din nou</div>
          <a href="../home.html#start" style="text-decoration: none;">
            <div onclick="location.reload()" class="at-the-end">Întoarce-te</div>
          </a>
        </div>
      </article>
      `
  }
});

document.querySelectorAll('.answer').forEach(option => {
  option.addEventListener('click', handleAnswerClick);
});

function handleAnswerClick(event) {
  if(ok === 0 ) {
    answers.forEach(option => {
      option.classList.add('no-hover');
    });
    ok = 1;
    const selectedAnswer = event.target; // Get the clicked element
    const currentQuizData = quizData[currentQuiz];
    const correctAnswer = document.getElementById(currentQuizData.correct); // Get the correct answer element
    const selectedAnswerDiv = selectedAnswer.parentElement; // Get the parent div of the clicked label

    if (selectedAnswer.id === currentQuizData.correct) {
      selectedAnswer.classList.add('correct'); // Add the class "correct" to the clicked element
      score++;
      console.log(score);
    } else {
      selectedAnswer.classList.add('wrong'); // Add the class "wrong" to the clicked element
      selectedAnswerDiv.classList.add('wrong'); // Add the class "wrong" to the parent div
      correctAnswer.classList.add('correct'); // Add the class "correct" to the correct answer element
    }
  }
}

