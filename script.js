// ! Challange 3 : Rock, Paper and SCissors

function rpsGame(yourChoice)
{
    console.log(yourChoice);
    // console.log(yourChoice.src);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt()); // It will take value from randToRps and gives to numberToChoice
    console.log('Computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won OR [0.5, 0.5] tied
    console.log(results);

    message = finalMessage(results); // {'message': 'You won!', 'color' : 'Green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// TODO: Read all below comments for better understanding

// * Maths.random() --> Gives random value b/w 0 to 1 but never reach to 1
// * Math.floor() --> COnvert decimal to integers
// * Math.floor(Math.random() * 3);  // This will ive random value b/w 0 to 2. 
// * ['rock', 'paper', 'scissors'][0] --> Gives rock
// * ['rock', 'paper', 'scissors'][1] --> Gives paper
// * ['rock', 'paper', 'scissors'][2] --> Gives scissors
// * ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)] --> Gives random

function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice)
{
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0},
    };
    
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if (yourScore === 0)
    {
        return {'message': 'You Lost!', 'color': 'red'}
    }

    else if (yourScore === 1)
    {
        return {'message': 'You Won!', 'color': 'green'}
    }

    else
    {
        return {'message': 'You Tied!', 'color': 'yellow'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +  "'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(0, 0, 255);'>"
    // <h1 style = 'color: green; font-size: 60px; padding: 30px;'> You Won! </h1> --> Actually Written in bottom line
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +  "'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(225, 0, 0);'>"

    document.getElementById('flex-box-rps-div').appendChild(botDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)


}

function restartAll() {
    document.location.reload();
}

