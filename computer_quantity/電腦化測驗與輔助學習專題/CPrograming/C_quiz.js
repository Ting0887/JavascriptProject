let idx = 1;
let score = 0;
let error = "";

// random questions from 1~10
let qst_gnt = Array.from(Array(10).keys())
qst_rdn = qst_gnt.sort(()=>Math.random()-0.5);

function next_qst(){
    if(idx <= 10){
        let num = document.getElementById('qst_num');
        let q0 = document.getElementById('qst'); 
        let ref0 = document.getElementById('s0'); 
        let ref1 = document.getElementById('s1'); 
        let ref2 = document.getElementById('s2'); 
        let ref3 = document.getElementById('s3'); 
    
        num.innerHTML = idx + ".";
        q0.innerHTML= C_qst[qst_gnt[idx-1]].q;
        ref0.innerHTML = C_qst[qst_gnt[idx-1]].options[0];
        ref1.innerHTML = C_qst[qst_gnt[idx-1]].options[1];
        ref2.innerHTML = C_qst[qst_gnt[idx-1]].options[2];
        ref3.innerHTML = C_qst[qst_gnt[idx-1]].options[3];
    }
    else{
        document.getElementById("next_qst").innerHTML = "提交";
        finalScore();
        show_err_ans();
    }
}

function check_ans(){
    //取得使用者選擇的選項
    let  selectedOption = getSelectedOption();
    if (selectedOption == C_qst[qst_gnt[idx-1]].correct) {
       score += 10; 
    }
    else{
        error += "<li><div style='font-weight:bold;color:#33FF42'>第" + idx + "題:</div><div class='qst_no'>"+ C_qst[qst_gnt[idx-1]].q + "</div>" + 
        "<div class='corr_ans'>正確答案為&nbsp;" + C_qst[qst_gnt[idx-1]].options[C_qst[qst_gnt[idx-1]].correct] + "</div></li>";
    }
    idx++;
}

function getSelectedOption() {
    let options = document.getElementsByName('option');
    let selectedOption;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }
    return selectedOption;
}

function show_err_ans(){
   localStorage.setItem("Wrong_ans",error);
}

function finalScore() {
    localStorage.setItem("C_score", score);
    window.location.href = "show_C_score.html";
}
