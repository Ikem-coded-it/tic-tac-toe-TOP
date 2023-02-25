(function gameBoard() {
    let gameBoard = []
    const player1 = {name: "player 1", input: "X"}
    const player2 = {name: "player 2", input: "O"}
    let defaultPlayer = player1
    const cells = document.querySelectorAll(".cell")
    const resultDisplay = document.querySelector(".result")

    const switchPlayer = function() {
        if (defaultPlayer == player1) {
            defaultPlayer = player2
        } else {
            defaultPlayer = player1
        }
    }

    const startOver = function() {
        gameBoard = []
        cells.forEach(cell => cell.innerText = '')
        resultDisplay.innerText = ''
    }

    const checkWin = function() {
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
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell4.innerText == "X" && cell5.innerText == "X" && cell6.innerText == "X" ||
        cell4.innerText == "O" && cell5.innerText == "O" && cell6.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell7.innerText == "X" && cell8.innerText == "X" && cell9.innerText == "X" ||
        cell7.innerText == "O" && cell8.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell1.innerText == "X" && cell4.innerText == "X" && cell7.innerText == "X" ||
        cell1.innerText == "O" && cell4.innerText == "O" && cell7.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell2.innerText == "X" && cell5.innerText == "X" && cell8.innerText == "X" ||
        cell2.innerText == "O" && cell5.innerText == "O" && cell8.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell3.innerText == "X" && cell6.innerText == "X" && cell9.innerText == "X" ||
        cell3.innerText == "O" && cell6.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell1.innerText == "X" && cell5.innerText == "X" && cell9.innerText == "X" ||
        cell1.innerText == "O" && cell5.innerText == "O" && cell9.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        if (cell3.innerText == "X" && cell5.innerText == "X" && cell7.innerText == "X" ||
        cell3.innerText == "O" && cell5.innerText == "O" && cell7.innerText == "O" ) {
            return resultDisplay.innerText = `${defaultPlayer.name} won!`
        }
        return
    }

    const makePlay = (function() {
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                for (i = 0; i <= 9; i++) {
                    if (cell.innerText != "X" && cell.innerText != "O") {
                        cell.innerText = defaultPlayer.input
                        gameBoard.push(defaultPlayer.input)
                        const ifWin = checkWin()

                        if (ifWin == "player 1 won!" || ifWin == "player 2 won!") {
                            setTimeout(startOver, 3000)
                            return
                        }

                        if (gameBoard.length == 9) {
                            resultDisplay.innerText == "It's a tie!"
                            startOver()
                        } 
                        switchPlayer()
                    }
                }
            })
        })
    })()
})()