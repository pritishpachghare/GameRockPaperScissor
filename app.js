// Make Rock, Paper, Scissor Game
// Game Rules
// 1) Rock and Paper = Paper Wins
// 2) Rock and Scissor = Rock Wins
// 3) Paper and Scissor = Scissor Wins

// Steps
// 1) Ask users to play the game or quit, if they press start, then step 2 or quit
// 2) Take User and Computer Input 
// 3) Show them what they choose and who wins as per the Game Rules
// 4) Again ask them do they like to play again



const items = ['Rock', 'Paper', 'Scissor'];

let userInput = 0;
let computerInput = 0;
let playGame = true;

while (playGame) {

    playGame = confirm('do you want to play the game ?');

    if (!playGame) {
        break;
    }


    userInput = prompt('Please select: (1)Rock,(2)Paper,(3)Scissor');

    while (userInput > 3 || userInput < 1 || isNaN(userInput)) {
        alert('please select correct number');
        userInput = prompt('Please select: (1)Rock,(2)Paper,(3)Scissor');

    }

    // computerInput
    computerInput = Math.floor(Math.random() * 3) + 1;
    // console.log(computerInput);

    // game logic
    userInput = userInput - 1;
    computerInput = computerInput - 1;

    if (items[userInput] === items[computerInput]) {
        alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result : ❎It\'s Tie`)
    }
    if (items[userInput] !== items[computerInput]) {
        // rock paper
        if (items[userInput] === 'Rock' && items[computerInput] === 'Paper') {
            alert(`Computer Select:${items[computerInput]}  User Select: ${items[userInput]}, \n Result :💻 computer wins!`)

        }
        if (items[userInput] === 'Paper' && items[computerInput] === 'Rock') {
            alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result :  👨‍🚒user wins!`)

        }

        // rock scissor
        if (items[userInput] === 'Rock' && items[computerInput] === 'Scissor') {
            alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result :  👨‍🚒user wins!`)

        }
        if (items[userInput] === 'scissor' && items[computerInput] === 'rock') {
            alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result : 💻computer wins!`)

        }

        // paper scissor
        if (items[userInput] === 'Paper' && items[computerInput] === 'Scissor') {
            alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result : 👨‍🚒user wins !`)

        }
        if (items[userInput] === 'Scissor' && items[computerInput] === 'Paper') {
            alert(`Computer Select: ${items[computerInput]}  User Select: ${items[userInput]}, \n Result : 💻computer wins !`)

        }
    }
}

