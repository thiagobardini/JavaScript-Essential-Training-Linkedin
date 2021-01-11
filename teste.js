function example(pixels){
   var baseValue = 16;
   function mathExample(){
      return pixels/baseValue;
   }
   // let mathExample = pixels/baseValue;
   // se a funcao acima, nao é possivel calcular os numeros
   return mathExample;
}

const smallSize = example(12);
const mediaSize = example(18);


console.log("Small Size: "+smallSize());
// Tem que colocar as chavez no final do smallSize() para fazer o calculo
console.log("Small Size: "+mediaSize());