const paraTag1 = document.getElementById("para1");
const inputTag = document.getElementById("input");
const scoreTag = document.getElementById("score");

let score=0;

function guessNumber() {
    let value = inputTag.value;
    let randomval = getRandomNumber();
    paraTag1.innerText = `Computer: ${randomval} You: ${value}`;
    randomval==value && score++;
    scoreTag.innerText = `Score: ${score}`; 
    inputTag.value = "";
}  

function getRandomNumber() {
    return Math.ceil(Math.random() * 10);
} 
