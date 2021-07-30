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

const c = document.querySelector('#myCanvas')
const ctx = c.getContext('2d')
ctx.fillStyle = 'red'

const dice1 = document.querySelector('#dice1Img')
const dice2 = document.querySelector('#dice2Img')
const dice3 = document.querySelector('#dice3Img')
const dice4 = document.querySelector('#dice4Img')
const dice5 = document.querySelector('#dice5Img')
const dice6 = document.querySelector('#dice6Img')

let playerCounter = 1

roundCounter1.innerHTML = 0
roundCounter2.innerHTML = 0
gameCounter1.innerHTML = 0
gameCounter2.innerHTML = 0
player1Turn.innerHTML = 1
player2Turn.innerHTML = 1



function addPlayer(){
    playerCounter = 2
    player2Div.style.display = 'flex'
    roundCounter1.innerHTML = 0
    roundCounter2.innerHTML = 0
    gameCounter1.innerHTML = 0
    gameCounter2.innerHTML = 0
    player1Turn.innerHTML = 1
    player2Turn.innerHTML = 1
    diceResult.innerHTML = 0
    playerButton.disabled = true
    playerButton.removeEventListener('click', addPlayer)
    playerButton.style.color = "#ffffff00"
    player1Div.style.borderTopRightRadius = "0"
    player1Div.style.borderBottomRightRadius = "0"
    
}

playerButton.addEventListener('click', addPlayer)

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
           playerButton.disabled = false
           player2Div.style.display = 'none'
           playerButton.addEventListener('click', addPlayer)
           playerButton.style.color = "white"
           player1Div.style.borderTopRightRadius = "12px"
           player1Div.style.borderBottomRightRadius = "12px"        
            break
   
        case 2:
           addPlayer()
            break
   
        default: prompt(`${reponsePrompt} : n'est pas une réponse correct, Veuillez indiquer si vous souhaiter joueur à un [1] ou deux [2] joueurs `)
            break
    }
   })
   

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
    console.log(diceResult.innerHTML)
    ctx.clearRect(0, 0, c.width, c.height)




    switch (parseFloat(diceResult.innerHTML)) {
        case 1:
            if (c.getContext) {
               ctx.beginPath()
                //centre milieu
                ctx.arc(50, 50, 5, 0, 2 * Math.PI, false)
                ctx.fill()
              } else {
              }
            break

        case 2:
            ctx.beginPath()
            //en haut à gauche
            ctx.arc(25, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            // en bas à droite
            ctx.moveTo(75,75)
            ctx.arc(75, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            break

        case 3:
            ctx.beginPath()
            //en haut à gauche            
            ctx.arc(25, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //centre milieu
            ctx.moveTo(50,50)
            ctx.arc(50, 50, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //en bas à droite
            ctx.moveTo(75,75)
            ctx.arc(75, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            break

        case 4:
            ctx.beginPath()
            //en haut à gauche
            ctx.arc(25, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //en bas à gauche
            ctx.moveTo(25,75)
            ctx.arc(25, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En bas à droite
            ctx.moveTo(75,75)
            ctx.arc(75, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En haut à droite
            ctx.moveTo(75,25)
            ctx.arc(75, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            break

        case 5:
            ctx.beginPath()
            ctx.fillStyle = 'red'
            //au milieu centre
            ctx.arc(50, 50, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //en haut à gauche
            ctx.moveTo(25,25)
            ctx.arc(25, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //en bas à gauche
            ctx.moveTo(25,75)
            ctx.arc(25, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En bas à droite
            ctx.moveTo(75,75)
            ctx.arc(75, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En haut à droite
            ctx.moveTo(75,25)
            ctx.arc(75, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            break

        case 6:
            ctx.beginPath()
            ctx.fillStyle = 'red'
            //en haut à gauche
            ctx.arc(25, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //milieu à gauche
            ctx.moveTo(25,75)
            ctx.arc(25, 50, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //en bas à gauche
            ctx.moveTo(25,75)
            ctx.arc(25, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En bas à droite
            ctx.moveTo(75,75)
            ctx.arc(75, 75, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //milieu à gauche
            ctx.moveTo(25,75)
            ctx.arc(75, 50, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            //En haut à droite
            ctx.moveTo(75,25)
            ctx.arc(75, 25, 5, 0, 2 * Math.PI, false)
            ctx.fill()
            break
    
        default:
            break
    }

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
            alert(`Well done ! You won within ${player1Turn.innerHTML} round`)
        }
    }
    else{
        if(player1Turn.innerHTML == player2Turn.innerHTML){
            ply1AddGame()
            if(gameCounter1.innerHTML >= 100){
                alert(`Well done Player 1 ! You won in ${player1Turn.innerHTML} round`)
            }
        }
        else {
            ply2AddGame() 
            if(gameCounter2.innerHTML >= 100){
                alert(`Well done Player 2 ! You won in ${player2Turn.innerHTML} round`)
            }
        }

    }

})