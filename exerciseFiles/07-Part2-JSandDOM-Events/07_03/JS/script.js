// primeiro eu crio duas constantes
const CTA = document.querySelector(".cta a");
// Um para o Botao
const ALERT = document.querySelector("#booking-alert");
// um botao para boooking alert area

// Agora vou fazer o meu JS ficar resiliente, caso o browser nao possa ler o JS.. tirando o efeito de hide, mostrando o booking alert sem efeito
CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
     // e.prevent.. faz a minha pagina ficar fixa quando eu clico
   e.preventDefault();
   CTA.classList.toggle("hide");
   ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;

