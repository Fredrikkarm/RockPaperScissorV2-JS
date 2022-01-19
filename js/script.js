const input = document.querySelector('input');
const playerName = document.getElementById(playername);
const btn = document.querySelector('button');
const btns = document.querySelectorAll('button.selection');
const selections = document.querySelector('.selections');
const h4 = document.querySelector('h4');
const Score = document.querySelectorAll('span');

//console.log(Score[0]);


btn.addEventListener('click', getText);
selections.addEventListener('click', function(event){
    //console.log(event.target.id);
    
    const mySelection = event.target.id;
    const compChoice = randomSelection();
    const h3 = document.querySelectorAll('h3');
    
    console.log('i chose ' + mySelection);
    console.log('computer chose ' + compChoice);

    //if(mySelection === btns.selections[0] && rps[0]){console.log('tie')}
    if(mySelection === compChoice){
        console.log('tie');
        h4.innerText = 'tie';
    }
    else if(mySelection === 'rock' && compChoice === 'scissors'){
        //console.log('rock beats scissors')
        h4.innerText = 'you win';
        Score[0].innerText = parseInt(Score[0].innerText) +1;

    }
    else if(mySelection === 'rock' && compChoice === 'paper'){
        //console.log('paper beats rock');
        h4.innerText = 'computer wins';
        Score[1].innerText = parseInt(Score[1].innerText) +1;
    }
    else if(mySelection === 'paper' && compChoice === 'scissors'){
        //console.log('scissors beats paper')
        h4.innerText = 'computer wins';
        Score[1].innerText = parseInt(Score[1].innerText) +1;
    }
    else if(mySelection === 'paper' && compChoice === 'rock'){
        //console.log('paper beats rock');
        h4.innerText = 'you win';
        Score[0].innerText = parseInt(Score[0].innerText) +1;
    }
    else if(mySelection === 'scissors' && compChoice === 'paper'){
        //console.log('scissors beats paper')
        h4.innerText = 'you win';
        Score[0].innerText = parseInt(Score[0].innerText) +1;
    }
    else if(mySelection === 'scissors' && compChoice === 'rock'){
        //console.log('rock beats paper');
        h4.innerText = 'computer wins';
        Score[1].innerText = parseInt(Score[1].innerText) +1;
    }
    else{console.log('something went wrong')}

    
       h3[0].innerText = 'you chose: ' + mySelection;
       h3[1].innerText = 'computer chose: ' + compChoice;

       //console.log(typeof Score[0].innerText = parseInt(Score[0].innerText));
       if(Score[0].innerText === '3'){
           alert("YOU WIN!");
           Score[0].innerHTML = 0;
           Score[1].innerHTML = 0;
       }
       if(Score[1].innerText === '3'){
            alert("YOU LOSE!");
            Score[0].innerHTML = 0;
            Score[1].innerHTML = 0;
    }
})
//btns.addEventListener('click',e)
//console.log(btns);
//console.log(randomSelection());



function getText(e){
    playername.innerText = 'player name: ' + input.value;
    input.value = '';
}

function randomSelection(){
    const random = Math.floor(Math.random() * 3);
    const rps = ['rock', 'paper', 'scissors']
    //console.log(rps[0])
    return rps[random];
}

function addScore(score){
    score.innerText = parseInt(score.innerText) +1;
    console.log('in addScore', parseInt(score.innerText));
}
