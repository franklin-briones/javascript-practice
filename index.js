let firstCard = 2
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

const startGame = () => {renderGame()}

function renderGame() {

    sumEl.textContent = "Sum: " + sum

    cardEl.textContent = "Cards: " + cards[0] + ", " + cards[1]

    if (sum<=20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum===21) {
        message = "Black Jack!"
        hasBlackJack=true
    }
    else {
        message = "You lose!"
        isAlive=false
    }

    messageEl.textContent=message   
}

function newCard() {
    let newCard = Math.ceil(Math.random()*11)
    sum += newCard
    renderGame()
}