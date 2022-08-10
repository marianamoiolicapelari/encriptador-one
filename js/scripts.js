
function encriptar() {
    let texto = document.getElementById('input-container').value.toLowerCase()

    var textCifrado = texto.replace(/e/igm, "enter")
    var textCifrado = textCifrado.replace(/o/igm, "ober")
    var textCifrado = textCifrado.replace(/i/igm, "imes")
    var textCifrado = textCifrado.replace(/u/igm, "ufat")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = textCifrado
    document.getElementById("btn-section-response").style.display = "show"
    document.getElementById("btn-section-response").style.display = "inherit"
    document.getElementById("btn-section-response-refresh").style.display = "show"
    document.getElementById("btn-section-response-refresh").style.display = "inherit"
}


function desencriptar() {
    let texto = document.getElementById('input-container').value.toLowerCase()

    var textCifrado = texto.replace(/enter/igm, "e")
    var textCifrado = textCifrado.replace(/ober/igm, "o")
    var textCifrado = textCifrado.replace(/imes/igm, "i")
    var textCifrado = textCifrado.replace(/ai/igm, "a")
    var textCifrado = textCifrado.replace(/ufat/igm, "u")


    document.getElementById("img-section-response").style.display = "none"
    document.querySelector(".second-paragraph").style.display = "none"
    document.querySelector(".first-paragraph").innerHTML = textCifrado
}

function copyToClickBoard() {
    let texto = document.getElementById('input-container')
    let content = document.querySelector('.first-paragraph').innerHTML;

    navigator.clipboard.writeText(content)
    alert("Copiado!")

    texto.value = ""
}

let buttonRefresh = document.querySelector("#btn-section-response-refresh");
buttonRefresh.addEventListener("click", function () {

    location.reload();
});
