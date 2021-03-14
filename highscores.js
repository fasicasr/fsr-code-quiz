let listHighscores = document.querySelector("#listHighscores");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#goBack");

//Retrieve local storage
let highScores = localStorage.getItem ('highScores') || []
highScores = JSON.parse(highScores)

if (highScores) {
for(let i = 0; i < highScores.length; i++) {
    let score = document.querySelector('#score' + (i + 1))
    score.innerText = highScores[i].name+highScores[i].score
}
}
clear.addEventListener("click", function () {
    localStorage.setItem('highScores', null)
    window.location.replace('highScores.html')
});

//event listener to move to homepage
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});