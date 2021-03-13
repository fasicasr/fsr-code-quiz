let listHighscores = document.querySelector("#listHighscores");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#goBack");

//Retrieve local storage
let highScores = localStorage.getItem ('highScores')
highScores = JSON.parse(highScores)

listHighscores.value =  JSON.stringify(highScores)

// clear.addEventListener('click', highScores) {
//     localStorage.clear();
//     // location.reload();
// };

localStorage.setItem = finalScores, null


//event listener to move to homepage
goBack.addEventListener("Click", function () {
    window.location.replace("index.html");
});