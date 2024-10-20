const quizData = [
  {
    question: "Care este numele matematicianului român cunoscut pentru teoria logicii matematice?",
    a: "Grigore C. Moisil",
    b: "Spiru Haret",
    c: "Nicolae Iorga",
    d: "Gheorghe Mihoc",
    correct: "a",
  },
  {
    question: "Cine este considerat fondatorul biologiei celulare?",
    a: "George Palade",
    b: "Emil Racoviță",
    c: "Grigore Antipa",
    d: "Victor Babeș",
    correct: "a",
  },
  {
    question: "Cine a inventat penicilina?",
    a: "Ana Aslan",
    b: "Constantin Ion Parhon",
    c: "Nicolae Constantin Paulescu",
    d: "Alexander Fleming",
    correct: "d",
  },
  {
    question: "Cine a inventat metodologia modernă de vaccinare împotriva difteriei?",
    a: "Victor Babeș",
    b: "Ana Aslan",
    c: "Nicolae Paulescu",
    d: "Constantin Ion Parhon",
    correct: "a",
  },
  {
    question: "Ce concept important în biologie celulară a dezvoltat George Palade și pentru care a primit Premiul Nobel?",
    a: "Antibiotice",
    b: "Cromozomi",
    c: "Ribozomi",
    d: "Citozol",
    correct: "c",
  },
  {
    question: "Care a fost prima realizare importantă în domeniul medicamentelor anti-îmbătrânire ale Anei Aslan?",
    a: "Gerovital H3",
    b: "Penicilina",
    c: "Insulina",
    d: "Aspirina",
    correct: "a",
  },
  {
    question: "Cine a condus reforma învăţământului secundar şi superior?",
    a: "Victor Babeș",
    b: "George Constantinescu",
    c: "Grigore C. Moisil",
    d: "Spiru Haret",
    correct: "d",
  },
  {
    question: "Ce descoperire importantă în medicină a făcut Constantin Ion Parhon?",
    a: "Glandei tiroide și a hormonilor tiroidieni",
    b: "Insulina",
    c: "Tehnica de transplant de organe",
    d: "Penicilina",
    correct: "a",
  },
  {
    question: "Ce metodă de tratare a diabetului a dezvoltat Nicolae Constantin Paulescu?",
    a: "Tratamentul chirurgical",
    b: "Insulina",
    c: "Metformina",
    d: "Tratamentul cu dietă",
    correct: "b",
  },
  {
    question: "Care este numele teoriei lui George (Gogu) Constantinescu care se ocupă de transmiterea energiei mecanice prin intermediul vibrațiilor?",
    a: "Teoria relativității",
    b: "Teoria sonicității",
    c: "Teoria evolutionista",
    d: "Teoria sonicității",
    correct: "d",
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
      selectedAnswer.classList.add('correct');
      score++;
      console.log(score);
    } else {
      selectedAnswer.classList.add('wrong');
      selectedAnswerDiv.classList.add('wrong');
      correctAnswer.classList.add('correct');
    }
  }
}

