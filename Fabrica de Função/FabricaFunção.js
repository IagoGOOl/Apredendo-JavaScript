function  CriaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto( valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura, 
        peso:  peso,
        get imc(){
            const indice = this.peso /(this.altura** 2);
            return indice.toFixed(2);
        }
    };
}



const p1 = CriaPessoa('Jacqueline', 'neves',1.58, 60);
//const p2 = CriaPessoa("Iris", "Oliveira", 1.65, 60);


p1.nomeCompleto = "Maria do Carmo"
console.log(p1.nome);
console.log(p1.sobrenome);