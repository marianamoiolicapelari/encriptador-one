
function encrypt() {
    var text = document.getElementById('input-container').value.toLowerCase()

    var encryptedText = text.replace(/e/igm, "enter")
    var encryptedText = encryptedText.replace(/o/igm, "ober")
    var encryptedText = encryptedText.replace(/i/igm, "imes")
    var encryptedText = encryptedText.replace(/u/igm, "ufat")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = encryptedText
    document.getElementById("btn-section-response").style.display = "show"
    document.getElementById("btn-section-response").style.display = "inherit"
    document.getElementById("btn-section-response-refresh").style.display = "show"
    document.getElementById("btn-section-response-refresh").style.display = "inherit"
}


function decrypt() {
    var text = document.getElementById('input-container').value.toLowerCase()

    var encryptedText = text.replace(/enter/igm, "e")
    var encryptedText = encryptedText.replace(/ober/igm, "o")
    var encryptedText = encryptedText.replace(/imes/igm, "i")
    var encryptedText = encryptedText.replace(/ai/igm, "a")
    var encryptedText = encryptedText.replace(/ufat/igm, "u")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = encryptedText
}

function copyToClickBoard() {
    var text = document.getElementById('input-container')
    var content = document.querySelector('.first-paragraph').innerHTML;

    navigator.clipboard.writeText(content)
    alert("Copiado!")

    text.value = ""
}

var buttonRefresh = document.querySelector("#btn-section-response-refresh");
buttonRefresh.addEventListener("click", function () {

    location.reload();
});
