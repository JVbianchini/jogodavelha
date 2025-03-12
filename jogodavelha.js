<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <style>
        .board { display: grid; grid-template-columns: repeat(3, 60px); gap: 5px; }
        .cell { width: 60px; height: 60px; text-align: center; font-size: 2em; border: 1px solid black; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Jogo da Velha</h1>
    <div class="board" id="board"></div>
    <p id="status"></p>
    <button onclick="resetGame()">Reiniciar</button>
    
    <script>
        let board = ["", "", "", "", "", "", "", "", ""];
        let player = "X";
        let gameOver = false;
        
        function checkWinner() {
            let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
            for (let w of wins) {
                if (board[w[0]] && board[w[0]] === board[w[1]] && board[w[0]] === board[w[2]]) {
                    document.getElementById("status").innerText = "Vencedor: " + board[w[0]];
                    gameOver = true;
                    return;
                }
            }
            if (!board.includes("")) {
                document.getElementById("status").innerText = "Empate!";
                gameOver = true;
            }
        }
        
        function makeMove(index) {
            if (board[index] || gameOver) return;
            board[index] = player;
            player = (player === "X") ? "O" : "X";
            updateBoard();
            checkWinner();
        }
        
        function updateBoard() {
            let boardDiv = document.getElementById("board");
            boardDiv.innerHTML = "";
            board.forEach((cell, i) => {
                let div = document.createElement("div");
                div.className = "cell";
                div.innerText = cell;
                div.onclick = () => makeMove(i);
                boardDiv.appendChild(div);
            });
        }
        
        function resetGame() {
            board = ["", "", "", "", "", "", "", "", ""];
            gameOver = false;
            document.getElementById("status").innerText = "";
            updateBoard();
        }
        
        updateBoard();
    </script>
</body>
</html>
