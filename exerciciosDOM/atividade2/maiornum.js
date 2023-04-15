let botao = document.getElementById("botao");

botao.addEventListener("click", function(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if(num1 > num2)
        resultado = num1;
    else if(num1 == num2)
        resultado = "não tem maior número, pois os dois são iguais";
    else
        resultado = num2;

    document.getElementById("resultadomaior").innerHTML = `O maior número é: ${resultado}`;
});
