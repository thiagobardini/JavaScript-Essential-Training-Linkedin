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

# 04 Using functions and objects

### 04-01 Function in JavaScript
![](https://i.imgur.com/gaq4Iu6.png)
![](https://i.imgur.com/iRqXjuu.png)
![](https://i.imgur.com/aGhd1iC.png)
![](https://i.imgur.com/G5YjE5P.png)
### 04-02 Build a basic function
![](https://i.imgur.com/oXimWcz.png)
condition ? value-if-true : value-if-false <br>
p.s.: a > b then(`?`) compare a else(`:`) b <br>
Pense no ? como “then” e : como “else”.
### 04-03 Add arguments to the function
![](https://i.imgur.com/hlsKq5x.png)
Reusable function: adding arguments `function name(a,b){...}` then reference var into the function
![](https://i.imgur.com/GIlfz5W.png)
### 04-04 Return values from a function
![](https://i.imgur.com/54Lqz4G.png)
### 04-05 Anonymous functions
Anonymous functions don't have name 
![](https://i.imgur.com/YyBvyIg.png)
![](https://i.imgur.com/XVI2iSF.png)
![](https://i.imgur.com/5cNoLH2.png)
![](https://i.imgur.com/5wA4f14.png) 
### 04-06 Immediately invoked functional expressions
Parenteses entre a funcao ->  expressao para invocar imediamente a funcao
![](https://i.imgur.com/6wq9uRV.png)
![](https://i.imgur.com/v1DsWp4.png)
O resultado vai ser undefined, pq só esta invocando a funcao em si
![](https://i.imgur.com/YhePUqh.png)
nesse caso o variable ja esta definido acima, entao funcao invocada trara resultado
### 04-07 Variable Scope
variable can be Global or Local
![](https://i.imgur.com/Es9Fcof.png)
declarando a variable OUT da funcao, a variable a funcao será Global
![](https://i.imgur.com/RdLVPJn.png)
declarando a variable IN da funcao, a variable a funcao será Local
![](https://i.imgur.com/xhMhQSU.png)
Se tentar acessar um variable local como se foose uma global = ReferenceError: result is not defined
![](https://i.imgur.com/MuwvetZ.png)
é por isso que usamos o return, com isso ele envia um pacote fora do escopo com um valor global
### 04-08 ES2015: let and const
![](https://i.imgur.com/OOZpsdG.png)
![](https://i.imgur.com/8DYweLH.png)
Na atualizacao do JS ECMAScript2015 ou ES6 temos dois tipos de variables
![](https://i.imgur.com/QcpV4qT.png)
const é valor que nao muda -  O resultado da troca de uma const é = TypeError
![](https://i.imgur.com/yIgzSWH.png)
exemplo var - nested-aninhado(dentro)
![](https://i.imgur.com/ZpWfJJ4.png)
exemplo var dentro de small blocos com var - resultado muda indepedente do small block
![](https://i.imgur.com/JTT8MAZ.png)
usando LET primeiro ao inves de VAR o resultado é diferente - esse valor é para statement bloco, ele se modifica
![](https://i.imgur.com/JqsxiWS.png)
se usar VAR e LET -> o let é um bloco exclusivo bloco dentro de outro statement bloco, nao para toda a funcao

### 04-09 Make sense of objects
![](https://i.imgur.com/1Zn8Uo3.png)
como gerenciar pastas de cursos como no exemplo acima.. Se fosse um curso seria facil gerenciar com um ARRAY, mas se eu tiver multiplos cursos acaba ficando confuso essa estrutura 
![](https://i.imgur.com/22hyg3v.png)
Criando um OBJECT global para curso, podemos definir PROPERTIES que especifica o que queremos definir para esse modelo de dados
![](https://i.imgur.com/uSavxhq.png) 
First criamos o curso OBJECT que é atribuido to a variable e definida como new Object() e depois criamos os PROPERTIES
![](https://i.imgur.com/sglA5YW.png)
é possivel consultar uma especifica property, usando o exemplo acima.. 
![](https://i.imgur.com/Fmfvc2i.png)
Tbm é possivel que contem METHODS - funcoes que podem mudar o uso do  data dentro da property object. <br>
- No exemplo ele ta usando um method para calcular a property course.view ->  ++course.views -> o resultado adicionará conforme o numero de views dentro dessa property

### 04-10 Object constructors
![](https://i.imgur.com/mFPVQJP.png)
esse exemplo acima acaba sendo util caso fosse apenas para um curso, mas se precisamos repertir as mesmas properties para multiplos cursos, usamos o objeto constructor, 
![](https://i.imgur.com/IAH0YqV.png)
para criarmos multiplos cursos usamos Objeto CONSTRUCTOR, que serve para usar o bloco de properties multiplo times. 
- Para criar um constructor, first criamos uma funcao como o exemplo acima
![](https://i.imgur.com/FryNchw.png)
se eu quiser criar multiplos cursos, agora eu posso usar a mesma estrutura acima para replicar para cada curso especifico
![](https://i.imgur.com/8JUq4wy.png)
Tbm é possivel criar um ARRAY ao inves de criar a variable para cada curso
![](https://i.imgur.com/AiKROeY.png)
Usando o array index é possivel chamar cada o objeto dentro da array.
- se quiser chamar uma epecifica property use a estrutura acima: objeto[index#].property
![](https://i.imgur.com/8Wq4tt7.png)
Posso chamar o Method tbm usando o array index

### Sidebar: Dot and bracket notation
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()