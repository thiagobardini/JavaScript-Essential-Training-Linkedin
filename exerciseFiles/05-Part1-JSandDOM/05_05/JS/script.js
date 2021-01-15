const CTAELEMENT = document.querySelector(".cta a");
// Estou referindo a uma constante, entao o value nunca vai mudar do meu selector

if(CTAELEMENT.hasAttribute("target")){
   console.log(CTAELEMENT.getAttribute("target"));
} else {
   CTAELEMENT.setAttribute("target","_blank");
}

console.log(CTAELEMENT.attributes);
// verificando as propriedades do meu atribuito