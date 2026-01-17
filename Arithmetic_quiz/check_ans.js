let error = ''
let cnt = 0;
let score = 0;
function checkAnswer(operator, questionId, replyId, feedbackId) {
    let n1 = parseInt(document.getElementById(questionId).innerText.split(operator)[0]);
    let n2 = parseInt(document.getElementById(questionId).innerText.split(operator)[1]);
    let uans = Number(document.getElementById(replyId).value);
    
    let msg, answer;
    switch (operator) {
      case "+":
        answer = n1 + n2;
        break;
      case "-":
        answer = n1 - n2;
        break;
      case "x":
        answer = n1 * n2;
        break;
      case "÷":
        answer = n1 / n2;
        break;
      default:
        return;
    }
    if (uans === answer) {
      score += 10;
      msg = `Correct!<img src="o.gif" width="60" height="60">`;
    } else {
      msg = `InCorrect!<img src="x.jpg" width="60" height="60">`;
      error += `${n1}${operator}${n2}=?<br>`;
      cnt += 1;
    }
    msg += `score:${score}`;
    document.getElementById(feedbackId).innerHTML = `<font color="blue" size="5">${msg}</font>`;
  }




