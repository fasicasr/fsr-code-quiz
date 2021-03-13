const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = [];
let questionsIndex = 0

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
    alert(score)
    //keeps track of the score
    return window.location.assign("end.html")
  }
  //issue with this 
  questionCounter++
  progressText.innerText = 'Question'
  // progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
  progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
  //how to calculate the value of the question index
  // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  //loops through questions
  if (questionsIndex > 4){
    questionsIndex = 0
  }
  currentQuestion = availableQuestions[questionsIndex++] //keep track of question user is on
  question.innerText = currentQuestion.question 

  choices.forEach(choice => {
      const number = choice.dataset['number']//know which choice user is clicking on
      choice.innerText = currentQuestion['choice' + number]
  })
  
  availableQuestions.splice[questionsIndex, 1]

  acceptingAnswers = true
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
          incrementScore(SCORE_POINTS)//if user get questin correct, score will increase in points
      }else {
        alert('wrong!')
      }
      
      // selectedChoice.parentElement.classList.add(classToApply)
    //shows the user time 
    getNewQuestion()
    // setTimeout(() =>{
    //     selectedChoice.parentElement.classList.remove(classToApply)
    //     getNewQuestion()

    //   },1000)
    })
 
})

incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

startQuiz()


