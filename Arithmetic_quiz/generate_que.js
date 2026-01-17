function nextq(qId, operator) {
    let n1, n2, question;
    switch (operator) {
      case '+':
        n1 = Math.floor(Math.random() * 90 + 10);
        n2 = Math.floor(Math.random() * 90 + 10);
        question = `<font>${n1}+${n2}=</font>`;
        break;
      case '-':
        do {
          n1 = Math.floor(Math.random() * 90 + 10);
          n2 = Math.floor(Math.random() * 90 + 10);
        } while (n1 < n2);
        question = `<font>${n1}-${n2}=</font>`;
        break;
      case 'x':
        n1 = Math.floor(Math.random() * 90 + 10);
        n2 = Math.floor(Math.random() * 90 + 10);
        question = `<font>${n1}x${n2}=</font>`;
        break;
      case '÷':
        do {
          n1 = Math.floor(Math.random() * 90 + 10);
          n2 = Math.floor(Math.random() * 10);
        } while (n1 % n2 !== 0);
        question = `<font>${n1}÷${n2}=</font>`;
        break;
    }
    document.getElementById(qId).innerHTML = question;
}