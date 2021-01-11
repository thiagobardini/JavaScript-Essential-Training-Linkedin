function ThiagoObjConstructor(name, idade, profissao,views) {
   this.name = name;
   this.idade = idade;
   this.profissao = profissao;
   this.views = views;
   this.updateViews = function(){
      return ++this.views;
   };
};

// let firstClient = new ThiagoObjConstructor("thiago", 35, "software engineer", 0);
// let firstClient = new ThiagoObjConstructor("Caroline", 26, "Psicologa", 0);

// or eu posso usar um array

let clients = [
   new ThiagoObjConstructor("thiago", 35, "software engineer", 0),
   new ThiagoObjConstructor("Caroline", 26, "Psicologa", 10)
]

console.log(clients[1]);
console.log(clients[1].updateViews());

