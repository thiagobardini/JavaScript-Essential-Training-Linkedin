# JavaScript Essential Training
![](https://miro.medium.com/max/1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg)
- [Click here to see the course](https://www.linkedin.com/learning/javascript-essential-training-3)

Learning objectives by branches:
- 02 What is JavaScript? 
- 03 Working with Data
- 04 Functions and Objects
- 05 Part 1 - JavaScript and the DOM
- 06 Project - Create an Analog Clock
- 07 Part 2 - JS and the DOM - Events  
- 08 Project - Typing Speed Tester
- 09 Loops
- 10 Project - Automated Resposive Images Markup
- 11 Troubleshooting, Validating, and Minifying JS
- 12 Bonus Chapter: Ask The Instructor

# 07 Part 2 - JS and the DOM - Events  
![](https://i.imgur.com/Uoq6oyA.png)
Acao do evento 
![](https://i.imgur.com/HVKbLBg.png)
Tipos de Eventospodem ser Browser-Level Events ou Dom-Level Events
![](https://i.imgur.com/OPgPQP5.png)
Common Browser-Level Event
![](https://i.imgur.com/pztPRIt.png)
Common DOM Events 
![](https://i.imgur.com/krl2JCw.png)
Other Events
![](https://i.imgur.com/HOvblN2.png)
Full List Event
- [MDN Web ZDocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
### 07-03 Trigger functions with event handlers
![](https://i.imgur.com/8J9CdHn.png)
a class Hide está escondendo `<a>`
![](https://i.imgur.com/UkbiYdF.png)
- se eu tiro a class hide o meu `<a>`aparece
![](https://i.imgur.com/qmxud8K.png)
usando o method toggle para hide e unhide um elemento
![](https://i.imgur.com/RiimzlO.png)
Com o código acima, vou usar o toggle o texto do Book Now, e quando eu clico untoggle texto.. o problema é que quando eu clico o meu `href="#"` leva a pagina para topo
![](https://i.imgur.com/Kc5J5uX.png)
Book Now desaparece.. e aparece o texto
![](https://i.imgur.com/ZBmtmb6.png)
para prevenir q  `href="#"` te leve para o top eu incluo `e.preventDefault()` fazendo que a minha pagina fique fixa.
- Chamar preventDefault durante qualquer fase do fluxo de eventos cancela o evento, o que significa que qualquer ação padrão normalmente feita pela aplicação como um resultado do evento não ocorrerá.

### 07-04 Add and use event listeners
![](https://i.imgur.com/YAaQw1I.png)
Se quiser usar dois eventos para o mesmo elemento com o codigo acima `click = cosole.log ...` isso ja vai quebrar o meu codigo de novo. Quando eu clico no botao a minha pagina vai para o topo e agora nem o css hide esta sendo mais aplicado, fazendo que o meu codigo rode apenas uma vez.
![](https://i.imgur.com/6O7gmlr.png)
Usando addEventListener.. podendo usar dois eventos no mesmo elemento multipla vezes
- o ultimo paramentro false no final é que vamos usar agora.. caso no futuro eu use true, ja estamos entrando em funcoes mais avancadas do JS. O true ele vai empilha evento no topo de outro evento.
### 07-05 Pass arguments via event listeners
![](https://i.imgur.com/w2mI71J.png)

## QUIZ - 07 Part 2 - JS and the DOM - Events  
![](https://i.imgur.com/T7KCW05.png)
![](https://i.imgur.com/BXbZQsc.png)
![](https://i.imgur.com/budVIgi.png)
![](https://i.imgur.com/A8lqB2W.png)
![](https://i.imgur.com/RwUG6nb.png)
![](https://i.imgur.com/3PODllT.png)
![](https://i.imgur.com/3PODllT.png)
![](https://i.imgur.com/jkUv1EJ.png)
![](https://i.imgur.com/imq9urL.png)
![](https://i.imgur.com/FBBotWO.png)