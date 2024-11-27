//Step 1
let board
let turn
let winner
let tie

//Step 2

const squareElements = document.querySelectorAll(".sqr")
const messageElement = document.querySelector("#message")
const resetBtnElement = document.querySelector('#reset')
//Step 3

const render = () => {
    updateBoard()
    updateMessage()
}

const init = () => {
    console.log("Init is called")
    render()
}

board = ["", "", "","","","","","",""]
turn = "X"
winner = false
tie = false

//Step 4
const updateBoard = () => {
    board.forEach( (element, index)=> {
        if(squareElements[index].textContent === 'X' || squareElements[index].textContent==='O'){
            squareElements[index].textContent=""
            board[index]=""
        }
        turn = "X"
        winner = false
        tie = false
        messageElement.innerHTML = 'Its X turns'
    })
//          squareElements.forEach((square)=>{
//          square.textContent = board[square.id] 
//          square.addEventListener("click", ()=>{
//             console.log(square.textContent)
//             if(square.textContent === 'O'){
//                 square.style.color = 'gold'
//             }
//             else if(square.textContent === 'X'){
//                 square.style.color = 'blue'
//             }
//             else{
//                 square.style.color = 'transparent'
//             }
//          })
//         })
}


const updateMessage = () => {
    if (winner === false && tie === false){
        messageElement.textContent = 'Its X turns'
    }
    else if (winner === false && tie === true){
        messageElement.textContent = 'Tie game!'
    }
    else {
        messageElement.textContent = `Its X turns`

    }

}
//Step 5

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Step 6

const handleClick = (event) => {
    let squareIndex=null
    squareIndex=event.target.id
    if(board[squareIndex] === 'X' || board[squareIndex] === 'O'){
        return console.log('Occubied Square')
    }
    else if (winner === true){
        return 'Game is over'
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()

}

squareElements.forEach((square) => {
    square.addEventListener("click", handleClick)
})

function placePiece(index){
    board[index] = turn
    squareElements[index].textContent=turn
    //console.log(board)
}

function checkForWinner(){
         if(board[0] !== '' && board[0] === board[1] && board[0] === board[2]){setWinner()}
         else if(board[0] !== '' && board[0] === board[1] && board[0] === board[2]){setWinner()}
         else if(board[3] !== '' && board[3] === board[4] && board[3] === board[5]){setWinner()}
         else if(board[6] !== '' && board[6] === board[7] && board[6] === board[8]){setWinner()}
         else if(board[0] !== '' && board[0] === board[3] && board[0] === board[6]){setWinner()}
         else if(board[1] !== '' && board[1] === board[4] && board[1] === board[7]){setWinner()}
         else if(board[2] !== '' && board[2] === board[5] && board[2] === board[8]){setWinner()}
         else if(board[0] !== '' && board[0] === board[4] && board[0] === board[8]){setWinner()}
         else if(board[2] !== '' && board[2] === board[4] && board[2] === board[6]){setWinner()}

         else{
            winner = false
         }
    }

function setWinner(){
    winner = true
    messageElement.innerHTML = `${turn} Wins`
}

function checkForTie(){
 if(winner === true){
    return
 }
 else{

    if(!board.includes('')){
        turn=''     
    }
    
    }
}

function switchPlayerTurn(){
    if(winner === true){
        return
    }
    else{
        if(turn === "X"){
            turn = "O"
            messageElement.innerHTML = "Its O turns"
        }
        else  if (turn === "O"){
            turn = "X"
            messageElement.innerHTML = "Its X turns"
        }
        else{
            messageElement.innerHTML = "Tie game!"
        }
    }
 }

 resetBtnElement.addEventListener("click", init)

init()

