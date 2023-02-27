(function game() {
    let gameBoard = []
    let scoreBoard = []
    const player1 = {name: "player 1", input: "X"}
    let player2 = {name: "player 2", input: "O"}
    let defaultPlayer = player1
    const cells = document.querySelectorAll(".cell")
    const resultDisplay = document.querySelector(".result")

    function switchPlayer() {
        if (defaultPlayer == player1) {
            defaultPlayer = player2
        } else {
            defaultPlayer = player1
        }
    }

    function startOver() {
        gameBoard = []
        cells.forEach(cell => cell.innerText = '')
        resultDisplay.innerText = ''
    }

    function checkWin() {
        const cell1 = document.getElementById('1')
        const cell2 = document.getElementById("2")
        const cell3 = document.getElementById("3")
        const cell4 = document.getElementById("4")
        const cell5 = document.getElementById("5")
        const cell6 = document.getElementById("6")
        const cell7 = document.getElementById("7")
        const cell8 = document.getElementById("8")
        const cell9 = document.getElementById("9")

        if (cell1.innerText == "X" && cell2.innerText == "X" && cell3.innerText == "X" ||
        cell1.innerText == "O" && cell2.innerText == "O" && cell3.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell4.innerText == "X" && cell5.innerText == "X" && cell6.innerText == "X" ||
        cell4.innerText == "O" && cell5.innerText == "O" && cell6.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell7.innerText == "X" && cell8.innerText == "X" && cell9.innerText == "X" ||
        cell7.innerText == "O" && cell8.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell1.innerText == "X" && cell4.innerText == "X" && cell7.innerText == "X" ||
        cell1.innerText == "O" && cell4.innerText == "O" && cell7.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell2.innerText == "X" && cell5.innerText == "X" && cell8.innerText == "X" ||
        cell2.innerText == "O" && cell5.innerText == "O" && cell8.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell3.innerText == "X" && cell6.innerText == "X" && cell9.innerText == "X" ||
        cell3.innerText == "O" && cell6.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell1.innerText == "X" && cell5.innerText == "X" && cell9.innerText == "X" ||
        cell1.innerText == "O" && cell5.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell3.innerText == "X" && cell5.innerText == "X" && cell7.innerText == "X" ||
        cell3.innerText == "O" && cell5.innerText == "O" && cell7.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        return
    }

    function keepScore(score) {
        scoreBoard.push(score)
        if (scoreBoard.length == 3) {
            const player1Scores = scoreBoard.filter(score => score == "player 1 won this round")
            const player2Scores = scoreBoard.filter(score => score == "player 2 won this round")

            if (player1Scores.length > player2Scores.length) {
                resultDisplay.innerHTML = "<div><h3>Game Over!</h3><p>Player 1 has won the game</p></div>"
                scoreBoard = []
            }
            if (player2Scores.length > player1Scores.length) {
                resultDisplay.innerHTML = "<div><h3>Game Over!</h3><p>Player 2 has won the game</p></div>"
                scoreBoard = []
            } 
        }
        return
    }

    (function restart() {
        const restartButton = document.querySelector("button")
        restartButton.addEventListener("click", () => {
            gameBoard = []
            scoreBoard = []
            cells.forEach(cell => cell.innerText = '')
            resultDisplay.innerText = ''
        })
    })();

    (function makePlay() {
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                if (cell.innerText != "X" && cell.innerText != "O") {
                    gameBoard.push(defaultPlayer.input)
                    if (gameBoard.length == 9) {
                        console.log(gameBoard)
                        resultDisplay.innerText = "It's a tie!"
                        setTimeout(startOver, 3000)
                    } 

                    cell.innerText = defaultPlayer.input
                    const ifWin = checkWin()

                    if (ifWin == "player 1 won this round" || ifWin == "player 2 won this round") {
                        keepScore(ifWin)
                        setTimeout(startOver, 3000)
                        return
                    }
                    switchPlayer()
                }
            })
        })
    })()
})()