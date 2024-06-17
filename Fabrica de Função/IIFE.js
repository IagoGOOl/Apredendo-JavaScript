(function(idade, peso, altura){
    const sobrenome = 'Alves';
    function criaNome(nome){
        return nome + ` ` + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('iago'));
    }

    falaNome();

    console.log(idade, peso, altura);

})(30, 82, 1.80);

const nome = "qualquer coisa";