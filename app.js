var player1Name = prompt("Enter name for Player 1:");
var player2Name = prompt("Enter name for Player 2:");

document.getElementById("player1-name").textContent = player1Name || "Player 1";
document.getElementById("player2-name").textContent = player2Name || "Player 2";

function rollDice() {
    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;

    document.getElementById("player1-result").textContent = player1Roll;
    document.getElementById("player2-result").textContent = player2Roll;

    if (player1Roll > player2Roll) {
        document.getElementById("result").textContent = player1Name + " wins!";
    } else if (player1Roll < player2Roll) {
        document.getElementById("result").textContent = player2Name + " wins!";
    } else {
        document.getElementById("result").textContent = "It's a draw!";
    }
}