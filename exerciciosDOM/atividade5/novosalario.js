let botao = document.getElementById("botao");

function newsal(){

    let salario = parseFloat(document.getElementById("salario").value);
    let percentual = parseFloat(document.getElementById("percentual").value);

    let resultado = salario + (salario * (percentual/100));

    document.getElementById("novsal").innerHTML = `O seu novo salário é: R$${resultado}`;
};

botao.addEventListener("click", newsal);