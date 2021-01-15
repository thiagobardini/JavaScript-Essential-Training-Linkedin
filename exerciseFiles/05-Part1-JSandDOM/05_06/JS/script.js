const FEATURED = document.querySelector(".featured-image");
// criando uma consntante para a minha clasee
const THEIMAGE = FEATURED.querySelector("img");
// crei outro constante para imagem, mas dessa vez estou usando o FEATURED ao inves de document. Dessa forma eu crio uma constante THEIMAGE (nested|aninhada) especifico para a minha classe .featured-image = FEATURED

var altText = THEIMAGE.getAttribute("alt");
// criei um variable escpecificamente para minha alt atrribuito para image

var captionElement = document.createElement("figcaption");
// aqui criamos um figcaption que nao existia antes no documento.
var captionText = document.createTextNode(altText);
// aqui criamos com createTextNode um variable para ser usado a seguir
captionElement.appendChild(captionText);
// agora que craimos a var de cima, podemos anexar o captionText dentro do captionElement.

console.log(captionElement);
// agora posso ver meu fication no console

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt","");
// esse setAtribuite a funcao dele é só nao mostra nada o que esta escrito no alt. Essa informacao agora esta no figcaption.