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

/*const dice1 = document.querySelector('#dice1Img')
const dice2 = document.querySelector('#dice2Img')
const dice3 = document.querySelector('#dice3Img')
const dice4 = document.querySelector('#dice4Img')
const dice5 = document.querySelector('#dice5Img')
const dice6 = document.querySelector('#dice6Img')
*/

let playerCounter = 1

$('#cntRound1').html('0')
$('#cntRound2').html('0')
$('#cntGame1').html('0')
$('#cntGame2').html('0')
$('#player1Turn').html('1')
$('#player2Turn').html('1')


$('#playerBtn').click(addPlayer)

$('#resetBtn').click( () => {
    const reponsePrompt = prompt('Choose the number of player wanted, 1 or 2')
    switch (parseFloat(reponsePrompt)) {
        case 1:
           playerCounter = 1
           $('#player2').css('display', 'none')
           $('#cntRound1').html('0')
           $('#cntRound2').html('0')
           $('#cntGame1').html('0')
           $('#cntGame2').html('0')
           $('#player1Turn').html('1')
           $('#player2Turn').html('1')
           $('#diceResult').html('0')
           $('#playerBtn').css('disabled', 'false')
           $('#playerBtn').click(addPlayer)
           $('#playerBtn').css('color', 'white')
           $('#player1').css("border-top-right-radius", "12px")
           $('#player1').css("border-bottom-right-radius", "12px")       
            break
   
        case 2:
           addPlayer()
            break
   
        default: prompt(`${reponsePrompt} : is not a correct answer. Please indicate if you want to playe solo [1] or with someone [2]`)
            break
    }

    changingBackground()

   })

   function addPlayer(){
    playerCounter = 2
    $('#player2').css('display','flex')
    $('#cntRound1').html('0')
    $('#cntRound2').html('0')
    $('#cntGame1').html('0')
    $('#cntGame2').html('0')
    $('#player1Turn').html('1')
    $('#player2Turn').html('1')
    $('#diceResult').html('0')
    $('#playerBtn').css('disabled', 'true')
    $('#playerBtn').unbind()
    $('#playerBtn').css('color', '#ffffff00')
    $('#player1').css("border-top-right-radius", "0");
    $('#player1').css("border-bottom-right-radius", "0")
    changingBackground()
}

function changingBackground(){
    if (playerCounter == 2){
        if ($('#player1Turn').html() == $('#player2Turn').html())
        {
            $('#player1').css('background-color', 'rgba(20, 50, 160, 0.75)')
            $('#player2').css('background-color', 'rgba(40, 17, 17, 0.75)')

        }
        else{
            $('#player1').css('background-color', 'rgba(17, 25, 40, 0.75)')
            $('#player2').css('background-color', 'rgba(151, 33, 33, 0.75')

        }
    }
    else{
        $('#player1').css('background-color', 'rgba(17, 25, 40, 0.75)')
    }

}
   

const randomNb = () => {
	return Math.floor(Math.random() * 6 )+1
}


function ply1AddCount(){
    roundCounter1.innerText = parseFloat(diceResult.innerText) + parseFloat(roundCounter1.innerText)

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


$('#diceBtn').click(() => {
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

    changingBackground()

})

$('#holdBtn').click(() => {
    if(playerCounter == 1){
        ply1AddGame()
        if(gameCounter1.innerHTML >= 100){
            alert(`Well done ! You won within ${player1Turn.innerHTML} rounds`)
            $('#playerBtn').unbind()
            $('#diceBtn').unbind()
            $('#holdBtn').unbind()
        }
    }
    else{
        if(player1Turn.innerHTML == player2Turn.innerHTML){
            ply1AddGame()
            if($('#cntGame1').html() >= 100){
                //gameCounter1.innerHTML >= 100){
                alert(`Well done Player 1 ! You won in ${player1Turn.innerHTML} rounds`)
                $('#playerBtn').unbind()
                $('#diceBtn').unbind()
                $('#holdBtn').unbind()
            }
        }
        else {
            ply2AddGame() 
            if($('#cntGame2').html() >= 100){
            //if(gameCounter2.innerHTML >= 100){
                alert(`Well done Player 2 ! You won in ${player2Turn.innerHTML} rounds`)
                $('#playerBtn').unbind()
                $('#diceBtn').unbind()
                $('#holdBtn').unbind()

            }
        }

    }

    changingBackground()

})