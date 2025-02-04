var modalOverlay = document.getElementById("overlay");

var modalDownloadAndroid = document.getElementById("modal-android");
var botaoDownloadAndroid = document.getElementById("android-btn");
var botaoDownloadAndroidMobile = document.getElementById("android-btn-mobile");

var modalDownloadIphone = document.getElementById("modal-iphone");
var botaoDownloadIphone = document.getElementById("iphone-btn");
var botaoDownloadIphoneMobile = document.getElementById("iphone-btn-mobile");

var modalDownloadComputador = document.getElementById("modal-computador");
var botaoDownloadComputador = document.getElementById("computador-btn");
var botaoDownloadComputadorMobile = document.getElementById(
  "computador-btn-mobile"
);

var modalRegistroRapido = document.getElementById("modal-registro");
var botaoRegistroRapido = document.getElementById("registro-btn");
var botaoRegistroRapidoMobile = document.getElementById("registro-btn-mobile");

function exibirModalBaixarAndroid() {
  modalOverlay.style.display = "block";
  modalDownloadAndroid.style.display = "block";
}

botaoDownloadAndroid.addEventListener("click", exibirModalBaixarAndroid);
botaoDownloadAndroidMobile.addEventListener("click", exibirModalBaixarAndroid);

function exibirModalBaixarIphone() {
  modalOverlay.style.display = "block";
  modalDownloadIphone.style.display = "block";
}

botaoDownloadIphone.addEventListener("click", exibirModalBaixarIphone);
botaoDownloadIphoneMobile.addEventListener("click", exibirModalBaixarIphone);

function exibirModalBaixarComputador() {
  modalOverlay.style.display = "block";
  modalDownloadComputador.style.display = "block";
}

botaoDownloadComputador.addEventListener("click", exibirModalBaixarComputador);
botaoDownloadComputadorMobile.addEventListener(
  "click",
  exibirModalBaixarComputador
);

function exibirModalRegistroRapido() {
  modalOverlay.style.display = "block";
  modalRegistroRapido.style.display = "block";
}

botaoRegistroRapido.addEventListener("click", exibirModalRegistroRapido);
botaoRegistroRapidoMobile.addEventListener("click", exibirModalRegistroRapido);

var modalPergunta1 = document.getElementById("resposta1");
var botaoPergunta1 = document.getElementById("faq1");
var botaoPergunta1Mobile = document.getElementById("faq1-mobile");

var modalPergunta2 = document.getElementById("resposta2");
var botaoPergunta2 = document.getElementById("faq2");
var botaoPergunta2Mobile = document.getElementById("faq2-mobile");

var modalPergunta3 = document.getElementById("resposta3");
var botaoPergunta3 = document.getElementById("faq3");
var botaoPergunta3Mobile = document.getElementById("faq3-mobile");

var modalPergunta4 = document.getElementById("resposta4");
var botaoPergunta4 = document.getElementById("faq4");
var botaoPergunta4Mobile = document.getElementById("faq4-mobile");

var modalPergunta5 = document.getElementById("resposta5");
var botaoPergunta5 = document.getElementById("faq5");
var botaoPergunta5Mobile = document.getElementById("faq5-mobile");

function exibirModalPergunta1() {
  modalOverlay.style.display = "block";
  modalPergunta1.style.display = "block";
}

botaoPergunta1.addEventListener("click", exibirModalPergunta1);
botaoPergunta1Mobile.addEventListener("click", exibirModalPergunta1);

function exibirModalPergunta2() {
  modalOverlay.style.display = "block";
  modalPergunta2.style.display = "block";
}

botaoPergunta2.addEventListener("click", exibirModalPergunta2);
botaoPergunta2Mobile.addEventListener("click", exibirModalPergunta2);

function exibirModalPergunta3() {
  modalOverlay.style.display = "block";
  modalPergunta3.style.display = "block";
}

botaoPergunta3.addEventListener("click", exibirModalPergunta3);
botaoPergunta3Mobile.addEventListener("click", exibirModalPergunta3);

function exibirModalPergunta4() {
  modalOverlay.style.display = "block";
  modalPergunta4.style.display = "block";
}

botaoPergunta4.addEventListener("click", exibirModalPergunta4);
botaoPergunta4Mobile.addEventListener("click", exibirModalPergunta4);

function exibirModalPergunta5() {
  modalOverlay.style.display = "block";
  modalPergunta5.style.display = "block";
}

botaoPergunta5.addEventListener("click", exibirModalPergunta5);
botaoPergunta5Mobile.addEventListener("click", exibirModalPergunta5);

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
