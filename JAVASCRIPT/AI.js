(function game() {
    let gameBoard = []
    let scoreBoard = []
    const player1 = {name: "player 1", input: "X"}
    const player2 = {name: "player 2"}
    let defaultPlayer
    const cells = document.querySelectorAll(".cell")
    const resultDisplay = document.querySelector(".result")
    // const restartButton = document.querySelector("button")
 
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

        let ifWin

        if (cell1.innerText == "X" && cell2.innerText == "X" && cell3.innerText == "X" ||
        cell1.innerText == "O" && cell2.innerText == "O" && cell3.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell4.innerText == "X" && cell5.innerText == "X" && cell6.innerText == "X" ||
        cell4.innerText == "O" && cell5.innerText == "O" && cell6.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell7.innerText == "X" && cell8.innerText == "X" && cell9.innerText == "X" ||
        cell7.innerText == "O" && cell8.innerText == "O" && cell9.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell1.innerText == "X" && cell4.innerText == "X" && cell7.innerText == "X" ||
        cell1.innerText == "O" && cell4.innerText == "O" && cell7.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell2.innerText == "X" && cell5.innerText == "X" && cell8.innerText == "X" ||
        cell2.innerText == "O" && cell5.innerText == "O" && cell8.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell3.innerText == "X" && cell6.innerText == "X" && cell9.innerText == "X" ||
        cell3.innerText == "O" && cell6.innerText == "O" && cell9.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell1.innerText == "X" && cell5.innerText == "X" && cell9.innerText == "X" ||
        cell1.innerText == "O" && cell5.innerText == "O" && cell9.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }
        if (cell3.innerText == "X" && cell5.innerText == "X" && cell7.innerText == "X" ||
        cell3.innerText == "O" && cell5.innerText == "O" && cell7.innerText == "O" ) {
            resultDisplay.innerText = `${defaultPlayer.name} won this round`
        }

        ifWin = resultDisplay.innerText;

        if (ifWin == "player 1 won this round" || ifWin == "player 2 won this round") {
            keepScore(ifWin)
            setTimeout(startOver, 3000)
            return ifWin
        }
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

    function checkForTie() {
        if (gameBoard.length == 9) {
            console.log(gameBoard)
            resultDisplay.innerText = "It's a tie!"
            setTimeout(startOver, 3000)
        } 
    }

    (function makePlay() {
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                defaultPlayer = player1
                if (cell.innerText != "X" && cell.innerText != "O") {
                    gameBoard.push(defaultPlayer.input)
                    checkForTie()
                    cell.innerText = defaultPlayer.input
                    const ifWin = checkWin()

                    if (!ifWin) setTimeout(bot, 1000)
                }
            })
        })
    })();

    function bot () {
        defaultPlayer = player2
        let freeCells = []
        cells.forEach(cell => {
            if (!cell.innerText) freeCells.push(cell)
        })
        let cell = freeCells[Math.floor(Math.random() * freeCells.length)]
        freeCells = []
        gameBoard.push("O")
        checkForTie()
        cell.innerText = 'O';
        checkWin()
    }
})()