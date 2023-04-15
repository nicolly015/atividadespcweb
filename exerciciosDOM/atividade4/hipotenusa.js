let botao = document.getElementById("botao");

function calchipotenusa(){

    let cat1 = parseFloat(document.getElementById("cateto1").value);
    let cat2 = parseFloat(document.getElementById("cateto2").value);

    let resultado = Math.sqrt(cat1**2 + cat2**2);

    document.getElementById("hipotenusa").innerHTML = `O tamanho da hipotenusa é: ${resultado}`;
};

let CAT1 = document.getElementById("cateto1");
let CAT2 = document.getElementById("cateto2");

CAT1.addEventListener("input", calchipotenusa);
CAT2.addEventListener("input", calchipotenusa);

botao.addEventListener("click", calchipotenusa);