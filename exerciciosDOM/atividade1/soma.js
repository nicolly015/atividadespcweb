let botao1 = document.getElementById("botao");

function somanum(){

    let num = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);   

    let resultado = num + num2;

    document.getElementById("resultadosoma").innerHTML = `O resultado da soma é: ${resultado}`;
};

botao1.addEventListener("click", somanum);
document.getElementById("num1").addEventListener("input", somanum);
document.getElementById("num2").addEventListener("input", somanum);


