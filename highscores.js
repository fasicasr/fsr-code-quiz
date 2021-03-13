let listHighscores = document.querySelector("#listHighscores");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#goBack");


let highScores = localStorage.getItem ('highScores')
highScores = JSON.parse(highScores)

listHighscores.value =  JSON.stringify(highScores)





//event listener to move to homepage
goBack.addEventListener("Click", function () {
    window.location.replace("index.html");
});