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
![](https://i.imgur.com/rMUuHIo.png)
Attributes é read onlye sempre se refere a um URL-> tempos alguns tipos de attributes abaixo
![](https://i.imgur.com/HfU1U9k.png)
Element.hasAttribuite() -> é para Boolean
![](https://i.imgur.com/kut1pOe.png)
Element.getAttribuite() -> returns their value of specified on the element.
![](https://i.imgur.com/KkFYD09.png)  
Element.setAttribuite()
![](https://i.imgur.com/QrUagzN.png)
Element.removeAttribuite()
![](https://i.imgur.com/fwgTvzG.png)
Exercicio 05_05 -> tem um exercicio na pasta JS -> script.js se referindo ao arquivo index.js
![](https://i.imgur.com/vALyM5J.png)
![](https://i.imgur.com/Vs3UYLJ.png)
script.js estava vazio, eu coloque os attribuites methods para add o target="_blank" na minha URL
![](https://i.imgur.com/Om9rli8.png)
![](https://i.imgur.com/3F2y8ZA.png)
Frequentemente esses metodos de atribuitos é usado para ADD ou change standard attributes, tipo links e customizar os dados do atribuitos. Podendo se fazer em qualquer atribuito dentro do documento. 

### 05-05 Add DOM elements 
![](https://i.imgur.com/oS6dQZG.png)
Exemplo de como mudar o texto usando o HTML 
![](https://i.imgur.com/flsVBVr.png)
Exercicio add um figcaption no meu node acima
![](https://i.imgur.com/DetSIcu.png)
como deve ficar
![](https://i.imgur.com/8HC22Ta.png)
![](https://i.imgur.com/9p3RJR0.png)
createElement()
![](https://i.imgur.com/OzKbDai.png)
Exercicio 05_06 - moonwalk.html
![](https://i.imgur.com/yW0PHUL.png)
antes sem aplicacao dos elements
![](https://i.imgur.com/N6yJprs.png)
![](https://i.imgur.com/qF6L4Sd.png)
![]()
![](https://i.imgur.com/pGuUqIj.png)
Existe um novo metodo que simplifica essas etapas no meu JS, mas os antigos browser nao surpotam esse novo method.
![](https://i.imgur.com/GWxQtbF.png)
captionElement.append(alText)

### 05-05 Add Inline CSS to an Element
![](https://i.imgur.com/doouheM.png)
inline CSS -> JS sempre works com individuals elements. Nunca vai trabalhar com uma pagina de CSS
![](https://i.imgur.com/DQNjvF0.png)
Return o CSS daquele especifico elemento
- CSSSTyleDeclaration -> esta dizendo que nao tem nenhum Inline CSS para esse elemento. Nao que nao tenha CSS nesse elemento, só que o  JS só lê o CSS que está atribuito diretamente inline para esse elemento.
![](https://i.imgur.com/4jjTcnp.png)
Usando a linha de codigo acima é possivel add color para o meu elemento INLINE
![](https://i.imgur.com/5ACfSY3.png)
HTML page com a class="cta" com style já atribuido em INLINE
![](https://i.imgur.com/vZXmVz0.png)
Atribuindo background
![](https://i.imgur.com/bxvQggb.png)
HTML page com a class="cta" com style já atribuido em INLINE
![](https://i.imgur.com/1OhfdDm.png)
É possivel tbm modificar multiplos CSS ao mesmo tempo usando .style.cssText = "...CSS.."
![](https://i.imgur.com/3qlzeBp.png)
HTML page com a class="cta" com style já atribuido em INLINE
![](https://i.imgur.com/bYbu19m.png)
![](https://i.imgur.com/BMBBza1.png)
- Inline CSS é attribuite com properties e values.
- Por Isso podemos usar um atribuitos acima, podendo interagir com diferentes styles
![](https://i.imgur.com/ggEsfqK.png)
usando setAttribute -> de atribuito é o style e o valor é a propriedade o padding separado por virgula
![](https://i.imgur.com/vxzr23J.png)
modificando todo inline dentro do CSS que tinhamos acabado de inserir
![](https://i.imgur.com/qAhSjUE.png)
para add mais CSS é só separar com ; 
![](https://i.imgur.com/H8Mmc7O.png)
Tips:
- quando usamos inline CSS sempre vamos reescrever o CSS, podendo dar problema.
- A melhor forma para utilizar é atribuir uma nova class e atribuir esses style css para esse classe e remover ou add class para modificar o style do elemento. É mais facil para gerenciar dessa forma.

## QUIZ - 05 Working with JavaScript and the DOM
![](https://i.imgur.com/M8GrXya.png)
![](https://i.imgur.com/SplkE3j.png)
![](https://i.imgur.com/Ua4FssR.png)
![](https://i.imgur.com/GdaOnxr.png)
![](https://i.imgur.com/a74L63c.png)
![](https://i.imgur.com/IJYMBUe.png)
![](https://i.imgur.com/lHTjaFl.png)
![](https://i.imgur.com/1RxtrQR.png)
![](https://i.imgur.com/3iiKvLn.png)
![](https://i.imgur.com/PZ9tOyo.png)
![](https://i.imgur.com/eT4Zus8.png)