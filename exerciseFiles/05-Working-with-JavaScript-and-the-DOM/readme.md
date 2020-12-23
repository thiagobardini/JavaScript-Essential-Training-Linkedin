# JavaScript Essential Training
![](https://miro.medium.com/max/1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg)


Learning objectives
- 02 What is JavaScript? 
- 03 Working with data
- 04 Using functions and objects
- 05 Working with JavaScript and the DOM
- 05 Changing DOM elements
- 06 Handling events
- 07 Working with loops
- 08 Making images responsive using markup
- 09 Troubleshooting code
- 10 Validating functionality
- 11 Minifying JavaScript

# 05 Working with JavaScript and the DOM

### 05-01 DOM: The document object model
![](https://i.imgur.com/PRr8y3V.png)
The Browser is a Object and document it is an Object too.
![](https://i.imgur.com/YD0AsiA.png)
por isso voce pode usar o console para manipular o browser.. Window is top level no Browser
![](https://i.imgur.com/e0kfsOx.png)
No Console do browser é possivel chamar html da pagina, chamando o object DOCUMENT or window.document
![](https://i.imgur.com/Mf1I7rM.png)
diferenca entre BOM e DOM
![](https://i.imgur.com/5QPQ8xv.png)
The DOM document Object Model is the model of the document
![](https://i.imgur.com/Rv9YDG8.png)
como CSS funciona, no exemplo acima ele esta dizendo para achar todos `a` no documento HTML e atribua os settings to it   
![](https://i.imgur.com/KLczLY3.png)
Node Tree

### 05-02 Target elements in the DOM with querySelector methods
![](https://i.imgur.com/5Z8Wrcy.png)
body, title, URL sao properties do DOM
![](https://i.imgur.com/Ey0JsNz.png)
Para usar um especifico node, se usa get the elementos com ID, CLASS, HTML  tag
![](https://i.imgur.com/a8XQKpw.png)
Quando existe nodes dentro de nodes fica dificil identificar com ID, class, html tag. Devido a isso se usa querySelectorAll
![](https://i.imgur.com/U98ydj8.png)
.querySelectorAll -> if you want return all select all | .querySelector -> first instace you pick it.
![](https://i.imgur.com/Fj6yrs9.png)
Query selector é o mais indicado ao inves do exemplo com ID Class html tag -> apenas se vc quiser especificar um tag especifica para nao dar ambiguidade, caso ao contrario query selector é a melhor opcao.

### 05-03 Access and change elements
![](https://i.imgur.com/wspXwrG.png)
The Mozilla Developer Network page is the reference for all the elements.
![](https://i.imgur.com/2srINrW.png)
A maioiria desses elementos serve apenas para leitura e nao para alteracao.
![](https://i.imgur.com/iMiSV5O.png)
ID -> usando o innerHTML = "change the text" 
![](https://i.imgur.com/7KLJ11f.png)
voce pode alterar ID confomer o exemplo acima -> document.querySelector("...").innerHtml = "Novo text"
![](https://i.imgur.com/pfugz4U.png)
selecionando Class 
![](https://i.imgur.com/W0VkSLZ.png)
 selecionando as listas dentro da class = abri dentro de uma array
![](https://i.imgur.com/SC6kdN2.png)

### 05-04 Access and change classes
![](blob:https://imgur.com/b92deafb-c332-4b23-9d9d-8cda120a062b)
Methods -> sao elementos que geralmente se usa para alterar
![](https://i.imgur.com/Faz4RzI.png)
 Como add a new class
![](https://i.imgur.com/Sbdc9wj.png)
Added new class
![](https://i.imgur.com/djMRh1b.png)
da pra remover tbm
![](https://i.imgur.com/SlAAau3.png)
![](https://i.imgur.com/RWGDDGA.png)
![](https://i.imgur.com/jEDyrRB.png)
![](https://i.imgur.com/089Hqlk.png)

### 05-05 Access and change attributes
![]()
![]()