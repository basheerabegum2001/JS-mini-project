const quizData = [
{
    question: "Which language runs in a web browser?",
     options: ["Java", "C", "Python", "JavaScript"], 
     answer: "JavaScript"
},
{
    question: "What does CSS stand for?", 
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], 
    answer: "Cascading Style Sheets"  
},
{
    question: "Which is not a programming language?", 
    options: ["HTML", "Python", "Java", "C++"], 
    answer: "HTML"
},
{
    question: "Which HTML tag is used to display JavaScript?", 
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
}
];

let index = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreE1 = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    const current = quizData[index];
    questionE1.innerText = current.question;

    answersE1.innerHTML = "";

    current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => {
            if(option === current.answer) {
                score++;
            }
            nextQuestion();
        };
        answersE1.appendChild(btn);
    });
}

function nextQuestion() {
    index++;

    if(index >= quizData.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreE1.innerText = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    index = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
}