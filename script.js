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
    question: 'what is 1 + 1?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 1,
  },
  {
    question: 'what is 2 + 2?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 2,
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
    choice2: '10',
    choice3: '8',
    choice4: '17',
    answer: 3,
  }, 
  {
    question: 'what is 5 + 5?',
    choice1: '2',
    choice2: '3',
    choice3: '8',
    choice4: '10',
    answer: 4,
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
 
  currentQuestion = availableQuestions[questionsIndex++] //keep track of question user is on
  question.innerText = currentQuestion.question 

  choices.forEach(choice => {
      const number = choice.dataset['number']//know which choice user is clicking on
      choice.innerText = currentQuestion['choice' + number]
  })
  
  availableQuestions.splice[questionsIndex, 1]

  acceptingAnswers = true

  if(availableQuestions.length === 0 || questionsIndex + 1 > MAX_QUESTIONS || timeleft <= 0) {
    localStorage.setItem('mostRecentScore', timeleft)
    //keeps track of the score
    return window.location.assign("end.html")
  }
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if(!acceptingAnswers) return //if it's not equal to accepting answers then retun
      
      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']//choices 1-4

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //toggle the corret css color
     //add correct and wrong alerts
      if(classToApply === 'correct'){
          // decrementScore(TIME_POINTS)
      }else {
        alert('wrong!')
        timeleft = timeleft - 20 
        
        // decrementScore(TIME_POINTS + 19)
      }
      
      
    //shows the user time 
    getNewQuestion()
    
    })
 
})

    let downloadTimer = setInterval(function(){
    timeleft--;
    scoreText.innerText = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);

// decrementScore = num => {
//   time -=num
//   scoreText.innerText = time
// }

startQuiz()


