 // Alterar o metodo principal por um novo metodo
 // superclasse
 class Ave{
    //metodo
    voar(){
        console.log("A ave voa");
    }
}
 //subclasse

 class Pinguim extends Ave {
    //polimorfismo
    voar(){
        console.log("Pinguins não podem voar");   

    }

}

// instanciando

let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();