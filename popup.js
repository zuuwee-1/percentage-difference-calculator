document.getElementById("oldNum").addEventListener("input", saveValues);
document.getElementById("newNum").addEventListener("input", saveValues);
document.getElementById("oldNum").addEventListener("focus", selectOldValue);
document.getElementById("newNum").addEventListener("focus", selectOldValue);
document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("clearBtn").addEventListener("click", clearInputs);
document.getElementById("copyBtn").addEventListener("click", copyBtn);

function selectOldValue() {
this.select();
}

function saveValues() {
    localStorage.setItem("oldNum", document.getElementById("oldNum").value);
    localStorage.setItem("newNum", document.getElementById("newNum").value);
    localStorage.setItem("result", document.getElementById("result").innerHTML);
}

function calculate() {
    var oldNum = parseFloat(document.getElementById("oldNum").value);
    var newNum = parseFloat(document.getElementById("newNum").value);
    if(!oldNum || !newNum){
        document.getElementById("result").innerHTML = "Please enter a valid number";
    }else if(oldNum==0){
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    }else {
        var difference = newNum - oldNum;
        var percentage = (difference / oldNum) * 100;
        document.getElementById("result").innerHTML = percentage.toFixed(2) + "%";
	saveValues();
    }
}

function copyBtn() {
    var result = document.getElementById("result").innerHTML;
    var number = parseFloat(result.slice(0, -1));
    navigator.clipboard.writeText(number.toString());
}

function clearInputs() {
    document.getElementById("oldNum").value = "";
    document.getElementById("newNum").value = "";
    document.getElementById("result").innerHTML = "";
	saveValues();
}

window.onload = function() {
    document.getElementById("oldNum").value = localStorage.getItem("oldNum") || "";
    document.getElementById("newNum").value = localStorage.getItem("newNum") || "";
    document.getElementById("result").innerHTML = localStorage.getItem("result") || "";
};

window.onunload = function() {
    localStorage.setItem("oldNum", document.getElementById("oldNum").value);
    localStorage.setItem("newNum", document.getElementById("newNum").value);
    localStorage.setItem("result", document.getElementById("result").innerHTML);
};
