// primeiro eu crio duas constantes
const CTA = document.querySelector(".cta a");
// Um para o Botao
const ALERT = document.querySelector("#booking-alert");
// um botao para boooking alert area

// Agora vou fazer o meu JS ficar resiliente, caso o browser nao possa ler o JS.. tirando o efeito de hide, mostrando o booking alert sem efeito
CTA.classList.remove("hide");
ALERT.classList.add("hide");

// e.prevent.. faz a minha pagina ficar fixa quando eu clico
function reveal(e,current) {
   e.preventDefault();
   
   current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now!";
  // Nao estou hide mais o CTA, inves disso quando eu clico aparece a "Oooops!" e se clicar de novo volta para o BOOK NOW!
   
  ALERT.classList.toggle("hide");
}

// CTA.onclick = reveal;
// CTA.onclick = console.log("The button was clicked!")

CTA.addEventListener("click", function(e){ reveal(e,this);}, false);
// this -> reference a CTA =  .cta a
CTA.addEventListener("click", function(){console.log("The button was clicked!!");}, false);

