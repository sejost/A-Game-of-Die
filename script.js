const player1Div = document.querySelector('#player1')
const player2Div = document.querySelector('#player2')

const diceButton = document.querySelector('#diceBtn')
const holdButton = document.querySelector('#holdBtn')
const playerButton = document.querySelector('#playerBtn')
const resetButton = document.querySelector('#resetBtn')

const diceResult = document.querySelector('#diceResult')

const roundCounter1 = document.querySelector('#cntRound1')
const roundCounter2 = document.querySelector('#cntRound2')

const gameCounter1 = document.querySelector('#cntGame1')
const gameCounter2 = document.querySelector('#cntGame2')

const player1Turn = document.querySelector('#player1Turn')
const player2Turn = document.querySelector('#player2Turn')

let playerCounter = 1

roundCounter1.innerHTML = 0
roundCounter2.innerHTML = 0
gameCounter1.innerHTML = 0
gameCounter2.innerHTML = 0
player1Turn.innerHTML = 1
player2Turn.innerHTML = 1

function addPlayer(){
    playerCounter = 2
    player2Div.style.display = 'block'
    roundCounter1.innerHTML = 0
    roundCounter2.innerHTML = 0
    gameCounter1.innerHTML = 0
    gameCounter2.innerHTML = 0
    player1Turn.innerHTML = 1
    player2Turn.innerHTML = 1
    diceResult.innerHTML = 0
    playerButton.disabled = true
    playerButton.removeEventListener('click', addPlayer)
    
}

playerButton.addEventListener('click', addPlayer)


const randomNb = () => {
	return Math.floor(Math.random() * 6 )+1
}



function ply1AddCount(){
    roundCounter1.innerHTML = parseFloat(diceResult.innerHTML) + parseFloat(roundCounter1.innerHTML)
}

function ply1AddGame(){
    gameCounter1.innerHTML = parseFloat(roundCounter1.innerHTML) + parseFloat(gameCounter1.innerHTML)
    player1Turn.innerHTML = parseFloat(player1Turn.innerHTML) + 1
    roundCounter1.innerHTML = 0
}

function ply1LostTurn(){
    player1Turn.innerHTML = parseFloat(player1Turn.innerHTML) + 1
    roundCounter1.innerHTML = 0
}

function ply2AddCount(){
    roundCounter2.innerHTML = parseFloat(diceResult.innerHTML) + parseFloat(roundCounter2.innerHTML)
}

function ply2AddGame(){
    gameCounter2.innerHTML = parseFloat(roundCounter2.innerHTML) + parseFloat(gameCounter2.innerHTML)
    player2Turn.innerHTML = parseFloat(player2Turn.innerHTML) + 1
    roundCounter2.innerHTML = 0
}

function ply2LostTurn(){
    player2Turn.innerHTML = parseFloat(player2Turn.innerHTML) + 1
    roundCounter2.innerHTML = 0
}


diceButton.addEventListener('click', () => {
    diceResult.innerHTML = randomNb()

    if (playerCounter == 1){
        ply1AddCount()
        if(diceResult.innerHTML == 1){
            ply1LostTurn()
        }
    }

    else {
        if(player1Turn.innerHTML <= player2Turn.innerHTML){
            ply1AddCount()
            if(diceResult.innerHTML == 1){
                ply1LostTurn()
            }
        }
        else {
            ply2AddCount() 
            if(diceResult.innerHTML == 1){
                ply2LostTurn()
            }
        }
    }

})

holdButton.addEventListener('click', () => {
    if(playerCounter == 1){
        ply1AddGame()
        if(gameCounter1.innerHTML >= 100){
            alert(`Bravo ! Tu as gagné en ${player1Turn.innerHTML} tours`)
        }
    }
    else{
        if(player1Turn.innerHTML == player2Turn.innerHTML){
            ply1AddGame()
            if(gameCounter1.innerHTML >= 100){
                alert(`Bravo Joueur 1 ! Tu as gagné en ${player1Turn.innerHTML} tours`)
            }
        }
        else {
            ply2AddGame() 
            if(gameCounter2.innerHTML >= 100){
                alert(`Bravo Joueur 2 ! Tu as gagné en ${player2Turn.innerHTML} tours`)
            }
        }

    }

})

resetButton.addEventListener('click', () => {
 const reponsePrompt = prompt('Choisissez le nombre de joueur, 1 ou 2')
 switch (parseFloat(reponsePrompt)) {
     case 1:
        playerCounter = 1
        roundCounter1.innerHTML = 0
        roundCounter2.innerHTML = 0
        gameCounter1.innerHTML = 0
        gameCounter2.innerHTML = 0
        player1Turn.innerHTML = 1
        player2Turn.innerHTML = 1
        player2Div.style.display = 'none'
        playerButton.addEventListener('click', addPlayer)
        
         break;

     case 2:
        addPlayer()
         break;

     default: prompt(`${reponsePrompt} : n'est pas une réponse correct, Veuillez indiquer si vous souhaiter joueur à un [1] ou deux [2] joueurs `)
         break;
 }
})




