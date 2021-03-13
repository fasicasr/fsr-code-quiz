const username = document.querySelector('#username')
const saceScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highscore = JSON.parse(localStorage.getitem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saceScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        retun b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringigy(highScores))
    window.location.assign('/')
}