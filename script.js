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
const answer_a = document.getElementById('answer_a');
const answer_b = document.getElementById('answer_b');
const answer_c = document.getElementById('answer_c');
const answer_d = document.getElementById('answer_d');
const button = document.getElementById('btn')
const list =document.getElementById('list')
const quiz = document.getElementById('container')


let currentQuestion =0;
let score =0;

// when the webpage initializes we need to call the questions
loadQuiz();

function loadQuiz(){
    // before loading each question we need to un-check the radio button, so 
    // we need to invoke the deselectAnswer function 
    deselectAnswer();
    const current_Question = quizData[currentQuestion];
    question.textContent= current_Question.question;
   answer_a.textContent= current_Question.a
    answer_b.textContent= current_Question.b
    answer_c.textContent= current_Question.c
    answer_d.textContent= current_Question.d
   
}

function getSelectedAnswer(){
    let answer='';
    //  selecting the answers  from the input radio button as an array,
    // so here we will get the four answers of the radio button.
    // then we will iterate through the array and check, any of the radio
    // button is selected , if it is selected  then we will grab the id of that 
    // radio button.& we will return that id.
    let ele = document.getElementsByName('answer');
    ele.forEach(item=>{
        if(item.checked){
           answer = item.id
        }
    })
    return answer
    }

    function deselectAnswer(){
    // once the radio button is selected we need to reselect the radio button
    // before we invoking the next question, otherwise the following questions will 
    // be checked with the same code.(c) . for that we need to un-check the button.
        let ele = document.getElementsByName('answer');
        ele.forEach(item=>{
           item.checked=false;
        })
       
        }
    

function submitAnswer(){
// invoking the getSelectedAnswer method
 const answer = getSelectedAnswer();
// conditionally checking if the user selected the radio button or not
// if user selected the radio button then we will check the id of that radio
// button equal to quizData' correct answer if both are equal ,we will 
// increment the value of score;
 if(answer){
     if(answer ===quizData[currentQuestion].correct){
         score++
     }
    currentQuestion++;
 }
// here we checking if the questions is less than the quizData length , if that
// the case we will call the loadQuiz function again ,other wise we will render
// the result 
    if(currentQuestion<quizData.length){
    loadQuiz();
    }else{
        quiz.innerHTML=`<h2>your score is  ${score}/${quizData.length}.</h2>`
    }
    
   
}



button.addEventListener('click',submitAnswer)
