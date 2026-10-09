const balu = {
    nome: "Balu Brasil",
    cor: "preto",
    altura: 0.58,
    peso: 11.5,
    raca: "vira-lata",
    latir(){
        alert("au au")
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei")
    },
    saudar(){
        let msg =`olá meu nome é ${this.nome}\n`;
        msg = msg+ `Cor: ${this.cor} raçsa ${this.raca}\n`;
        msg = msg+ `Peso: ${this.peso}\n`;
        msg = msg+ `Altura: ${this.altura}\n`;
        alert(msg)
    }
}