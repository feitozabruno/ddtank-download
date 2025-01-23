var modalOverlay = document.getElementById("overlay");

var modalDownloadAndroid = document.getElementById("modal-android");
var botaoDownloadAndroid = document.getElementById("android-btn");

var modalDownloadIphone = document.getElementById("modal-iphone");
var botaoDownloadIphone = document.getElementById("iphone-btn");

var modalDownloadComputador = document.getElementById("modal-computador");
var botaoDownloadComputador = document.getElementById("computador-btn");

var modalRegistroRapido = document.getElementById("modal-registro");
var botaoRegistroRapido = document.getElementById("registro-btn");

botaoDownloadAndroid.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalDownloadAndroid.style.display = "block";
});

botaoDownloadIphone.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalDownloadIphone.style.display = "block";
});

botaoDownloadComputador.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalDownloadComputador.style.display = "block";
});

botaoRegistroRapido.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalRegistroRapido.style.display = "block";
});

var modalPergunta1 = document.getElementById("resposta1");
var botaoPergunta1 = document.getElementById("faq1");

var modalPergunta2 = document.getElementById("resposta2");
var botaoPergunta2 = document.getElementById("faq2");

var modalPergunta3 = document.getElementById("resposta3");
var botaoPergunta3 = document.getElementById("faq3");

var modalPergunta4 = document.getElementById("resposta4");
var botaoPergunta4 = document.getElementById("faq4");

var modalPergunta5 = document.getElementById("resposta5");
var botaoPergunta5 = document.getElementById("faq5");

botaoPergunta1.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalPergunta1.style.display = "block";
});

botaoPergunta2.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalPergunta2.style.display = "block";
});

botaoPergunta3.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalPergunta3.style.display = "block";
});

botaoPergunta4.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalPergunta4.style.display = "block";
});

botaoPergunta5.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modalPergunta5.style.display = "block";
});

modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
    modalDownloadAndroid.style.display = "none";
    modalDownloadIphone.style.display = "none";
    modalDownloadComputador.style.display = "none";
    modalRegistroRapido.style.display = "none";
    modalPergunta1.style.display = "none";
    modalPergunta2.style.display = "none";
    modalPergunta3.style.display = "none";
    modalPergunta4.style.display = "none";
    modalPergunta5.style.display = "none";
  }
});
