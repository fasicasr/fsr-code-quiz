const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let time = 75
let questionCounter = 0
let availableQuestions = [];
let questionsIndex = 0
let timeleft = 75;

let questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choice1: 'strings',
    choice2: 'booleans',
    choice3: 'alerts',
    choice4: 'numbers',
    answer: 3,
  },
  {
    question: 'The condition in an if/else statment is enclosed within__',
    choice1: 'quotes',
    choice2: 'parentheses',
    choice3: 'curly brackets',
    choice4: 'squre brackets',
    answer: 2,
  },
  {
    question: 'Arrays in JavaScript can be used to store__',
    choice1: 'numbers and strings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all of the aboce',
    answer: 4,
  },
  {
    question: 'String values must be enclosed within ___ when being assigned to variables',
    choice1: 'commas',
    choice2: 'curly brackets',
    choice3: 'quotes',
    choice4: 'parentheses',
    answer: 2,
  }, 
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choice1: 'console.log',
    choice2: 'for loops',
    choice3: 'terminal/bash',
    choice4: 'javaScript',
    answer: 1,
  },     
]
//fixed numbers. Score points and number of questions won't change 
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5
const TIME_POINTS = 1
//Function to start the quiz
startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]//use an array&spread operator to grab all the values from the question function above
    getNewQuestion()

}

//calling new question 
getNewQuestion = () => {
  
  progressText.innerText = 'Question'
 
  if(availableQuestions.length === 0 || questionsIndex > (MAX_QUESTIONS -1) || timeleft <= 0) {
    localStorage.setItem('mostRecentScore', timeleft)
    //keeps track of the score
    return window.location.assign("end.html")
  }
  currentQuestion = availableQuestions[questionsIndex] //keep track of question user is on
  question.innerText = currentQuestion.question 

  choices.forEach(choice => {
      const number = choice.dataset['number']//know which choice user is clicking on
      choice.innerText = currentQuestion['choice' + number]
  })
  
  availableQuestions.splice[questionsIndex, 1]

  acceptingAnswers = true

 
  questionsIndex++

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if(!acceptingAnswers) return //if it's not equal to accepting answers then retun
      
      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']//choices 1-4

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' 
    //  //add correct and wrong alerts
      if(classToApply === 'correct'){
      
      }else {
        alert('wrong!')
        if (timeleft < 20) {
          timeleft = 0
        }
        else {
          timeleft = timeleft - 20 
        }
     
      }
       
   
    getNewQuestion()
    
    })
 
})

    let downloadTimer = setInterval(function(){
    timeleft--;
    scoreText.innerText = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);


startQuiz()


