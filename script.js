const question = document.querySelector('#question');
const choices = Array.from(querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = [];

let questions = [
  {
    question: 'what is 2 + 2?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 2,
  },
  {
    question: 'what is 1 + 1?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 1,
  },
  {
    question: 'what is 3 + 3?',
    choice1: '6',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 1,
  },
  {
    question: 'what is 4 + 4?',
    choice1: '2',
    choice2: '4',
    choice3: '8',
    choice4: '17',
    answer: 3,
  },   
]
//fixed numbers. Score points and number of questions won't change 
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
//Function to start the quiz
startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]//use an array&spread operator to grab all the values from the question function above
    getNewQuestion()
}
//calling new question 
getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    //keeps track of the score
    return window.location.assign('/end.html')
  }
  //issue with this 
  questionCounter++
  progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
  progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
  //how to calculate the value of the question index
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex] //keep track of question user is on
  question.innerText = currentQuestion.question 

  choices.forEach(choice =>{
      const number = choice.dataset['number']
      choice.innerText = currentQuestion


  })
}
