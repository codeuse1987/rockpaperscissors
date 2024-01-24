const com_answer = ["paper", "scissor", "rock"];
var pscore = 0;
var cscore = 0;
var msg = ""
updateDisplay();


function playerSelection(value) {
    // alert("Clicked " + value);
    // console.log("Result +",gen_com());

    // alert("Result ", game(com_answer.indexOf(value), getComputerChoice()));


    if (pscore < 5 && cscore < 5) {
        const result = game(com_answer.indexOf(value), getComputerChoice());
        console.log("Result ", result);
        msg = result;
        console.log(`p_score ${pscore} c_score ${cscore}`);
        updateDisplay();
    }
}
function reset() {
    pscore = 0;
    cscore = 0;
    msg = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("pScore").innerHTML = `Player Sore: ${pscore}`;
    document.getElementById("cScore").innerHTML = `Computer Sore: ${cscore}`;
    if (msg.length !== 0) {
        document.getElementById("msg").innerHTML = `${msg}`;
    }
    if (pscore === 5 || cscore === 5) {
        confirm(pscore > cscore ? "You Win" : "You Lost") ? reset() : null;
    }
}

function getComputerChoice() {
    console.log("AAA", com_answer.length);
    const result = Math.floor(Math.random() * com_answer.length);
    return result;
}
function game(player, computer) {
    console.log("P ", player, "C", computer);
    if (player === computer) {
        return (`Draw, both of you are ${com_answer[player]}`);
    } else if (player > computer) {
        if (computer === 0 && player === 2) {
            cscore++;
            return (`You Lose! ${com_answer[computer]} beat ${com_answer[player]}`);
        }
        pscore++;
        return (`You Win! ${com_answer[player]} beat ${com_answer[computer]}`);

    } else if (player < computer) {
        if (computer === 2 && player === 0) {
            pscore++;
            return (`You Win! ${com_answer[player]} beat ${com_answer[computer]}`);
        }
        cscore++;
        return (`You Lose! ${com_answer[computer]} beat ${com_answer[player]}`);
        //         return "You Lose! Paper beats Rock";
    }
    return "ERROR"
}