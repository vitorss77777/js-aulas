// Herança
//superclasse
class Animal {
    constructor(nome){
        this.nome = nome;
    }
    fazerSom(){
        console.log("O animal fez um som");
    }
}

// subclasse

class Cachorro extends Animal{
    fazerSom(){
        console.log("O cachorro late");
    }
}
let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();