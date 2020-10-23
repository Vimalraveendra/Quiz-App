const quizData =[{
        question:'What type of language is Javascript',
        a:'single threaded',
        b:'multi threaded',
        c:'both',
        d:'none of above',
        correct:'a'

    },{
        question:"What does HTML stands for",
        a:'Json object Notation',
        b:'Cascading style sheet',
        c:'HyperText Markup language',
        d:'HyperText Notation',
        correct:'c'
    },{
        question:"Which syntax is used for coloring  the html element text",
        a:'background-color',
        b:'color',
        c:'text-color',
        d:'none of the above',
        correct:'b'
    },
    {
        question:"What does JSON stands for ",
        a:'Json object Notation',
        b:'Cascading style sheet',
        c:'HyperText Markup language',
        d:'Javascript ObjectNotation',
        correct:'d'
    },
    {
        question:"What does REST stands for",
        a:'Json object Notation',
        b:'Representational state transfer',
        c:'HyperText Markup language',
        d:'Rest state Transfer',
        correct:'b'
    }

]

const question = document.getElementById('question');
const answer_a = document.getElementById('a');
const answer_b = document.getElementById('b');
const answer_c = document.getElementById('c');
const answer_d = document.getElementById('d');
const button = document.getElementById('btn')
const list =document.getElementById('list')

let currentQuestion =0;
loadQuiz();

function loadQuiz(){
    const current_Question = quizData[currentQuestion];
    question.textContent= current_Question.question;
   answer_a.textContent= current_Question.a
    answer_b.textContent= current_Question.b
    answer_c.textContent= current_Question.c
    answer_d.textContent= current_Question.d
   
}

function submitAnswer(){
    currentQuestion++;
    if(currentQuestion<quizData.length){
    loadQuiz();
    }
}

function checkAnswer(e){
 console.log(e.target)
}

button.addEventListener('click',submitAnswer)
list .addEventListener('click',checkAnswer)