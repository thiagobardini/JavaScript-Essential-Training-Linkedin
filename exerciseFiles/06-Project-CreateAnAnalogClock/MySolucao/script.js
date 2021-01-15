const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec)

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
   hrPosition = hrPosition+(3/360);
   // movimenta na distancia de um hora(360/12)=30 & 3600secs in 1 hour | 30/3600 = corta os zeros resultado acima = 3/360
   minPosition = minPosition+(6/60);
   secPosition = secPosition+ 6;
   // numero acima é 6, a gente descobriu quantos degres ele movimenta por segundo, 360/60= 6 degrees

   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
// setInteval roda repeditamente uma funcao em milisecond  -> acima 1000 millisecond = 1sec



// Mudandado a logica do codigo, muda a logica de como o codigo vai mostrar a pagina..  
// nesse exemplo foi tirado o transform do css para que nao tivesse o efeito, mas quando o relogio chegava no 360 degree e voltava para posicao zero, os poiteiros fazia uma volta antihorario.. por isso q foir add movimento por distancia dentro da funcao
// se caso nao tivesse no css o transform efeito, nao precisaria colocar movimentos por distancia de cada ponteiro..orrax entendes?