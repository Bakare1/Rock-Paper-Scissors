function rpsGame(yourChoice){
    console.log(yourChoice);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberOfChoice(RandomToRpsInt());
    console.log('bot Choice is : ' + botChoice);

    result = decideWinner(humanChoice,botChoice);
    console.log(result);

    message = finalMessage(result);
    console.log(message);

    rpsFrontend(yourChoice.id,botChoice,message);
}

function RandomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberOfChoice(number){
    return ['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors' : 1,'rock' : 0.5,'paper' : 0},
        'paper' : {'rock' : 1, 'paper' : 0.5, 'scissors' : 0},
        'scissors' : {'paper' : 1,'scissors' : 0.5, 'rock' : 0}
    };

    let yourScore = rpsDatabase[yourChoice] [computerChoice];
    let computerScore = rpsDatabase[computerChoice] [yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message' : 'You Lost','color' : 'red'};
    }else if(yourScore === 0.5){
        return {'message' : 'You Tied','color' : 'yellow'};
    }else{
        return {'message' : 'You Win','color' : 'green'}
    }
}

function rpsFrontend(humanImageChoice,computerImagechoice,finalMessage){
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let computerDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML= "<h1 style='color:" + finalMessage['color'] + "; font-size : 60px padding : 30px;'>" + finalMessage['message'] + "</h1>"
    computerDiv.innerHTML = "<img src='" + imageDatabase[computerImagechoice] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(computerDiv);
}