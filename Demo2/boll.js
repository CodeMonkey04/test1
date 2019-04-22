
function kuken() {
    document.getElementById("box").innerHTML = "kuken"
}

function removeKuken() {
    document.getElementById("box").innerHTML = ""
}

function dittIQ() {
    var IQ = Math.random()*140;
    var namn = document.getElementById("dittNamn").value;
    
    if (namn === "Stefan") {
        var IQ = 10;
    }
    document.getElementById("box").innerHTML = IQ;
}