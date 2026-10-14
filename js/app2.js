class Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r= "vira-lata"){
        this.nome = n;
        this.cor = c;
        this.altura = a;
        this.peso = p;
        this.raca= r;
    }
    falar(){
        alert("oi");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi"); 
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    }
    saudar(){
        let msg =`olá meu nome é ${this.nome}\n`;
        msg = msg+ `Cor: ${this.cor} raça ${this.raca}\n`;
        msg = msg+ `Peso: ${this.peso}\n`;
        msg = msg+ `Altura: ${this.altura}\n`;
        return msg;
    }
}

class Cachorro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r= "vira-lata"){
        super(n,c,a,p,r);
        this.patas = 4
    }
    falar(){
        alert("au! au!");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg +"\nSou um cachorro!";
        alert(msg);
    }
}

class Passaro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r= "desconhecido"){
        super(n,c,a,p,r);
    }
    falar(){
        alert("fiun!fiun!");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg +"\nSou um papagaio!";
        alert(msg);
    }

}

const balu = new Cachorro("Balu Brasil");
const mel = new Animal("mel", "amerelo", 1.10, 45, "labrador")
const leleco = new Passaro("leleco Brasil", undefined, undefined, undefined,r="Papagaio");