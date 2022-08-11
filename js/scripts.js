
function encrypt() {
    let text = document.getElementById('input-container').value.toLowerCase()

    let encryptedText = text.replace(/e/igm, "enter")
    encryptedText = encryptedText.replace(/o/igm, "ober")
    encryptedText = encryptedText.replace(/i/igm, "imes")
    encryptedText = encryptedText.replace(/u/igm, "ufat")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = encryptedText
    document.getElementById("btn-section-response").style.display = "show"
    document.getElementById("btn-section-response").style.display = "inherit"
    document.getElementById("btn-section-response-refresh").style.display = "show"
    document.getElementById("btn-section-response-refresh").style.display = "inherit"
}


function decrypt() {
    let text = document.getElementById('input-container').value.toLowerCase()

    let encryptedText = text.replace(/enter/igm, "e")
    encryptedText = encryptedText.replace(/ober/igm, "o")
    encryptedText = encryptedText.replace(/imes/igm, "i")
    encryptedText = encryptedText.replace(/ai/igm, "a")
    encryptedText = encryptedText.replace(/ufat/igm, "u")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = encryptedText
}

function copyToClickBoard() {
    let text = document.getElementById('input-container')
    let content = document.querySelector('.first-paragraph').innerHTML;

    navigator.clipboard.writeText(content)
    alert("Copiado!")

    text.value = ""
}

let buttonRefresh = document.querySelector("#btn-section-response-refresh");
buttonRefresh.addEventListener("click", function () {

    location.reload();
});
