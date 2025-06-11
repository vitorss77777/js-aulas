 class Pessoa{ 
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

 get nome(){
    return this._nome;
 }  

set nome(novoNome){
    this._nome = novoNome;
  }
}

let pessoa = new Pessoa("Maria",22);
console.log(pessoa.nome);
pessoa.nome = "Maria Carolina";
console.log(pessoa.nome);
