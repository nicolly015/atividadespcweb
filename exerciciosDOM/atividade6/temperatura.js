let botao = document.getElementById("botao");

function celsiufahrenheit(){

    let celsius = parseFloat(document.getElementById("celsius").value);
    let celsius2 = parseFloat(document.getElementById("celsius").value);

    let fahrenheit = (celsius*(9/5)) + 32;

    document.getElementById("fahrenheit").innerHTML = `${celsius2}C = ${fahrenheit}F`
};

botao.addEventListener("click", celsiufahrenheit);