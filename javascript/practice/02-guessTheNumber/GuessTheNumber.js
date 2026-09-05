let gameNum = 25;
let userNum = prompt("Guess a number between 1 and 100");
console.log(userNum);

while (userNum!= gameNum){
    userNum= prompt("you entered wrong number");

}

console.log("Congratulations you entered the right number");
