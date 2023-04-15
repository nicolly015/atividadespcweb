let botao = document.getElementById("botao");

function numeroprimo(){

    let num = parseFloat(document.getElementById("num").value);
    let resultado;
    let i;
    let qtd = 0;
    let j = 0;

    for(i = 1; i <= num; i++)
    {
        qtd = num % i;
        if (qtd == 0)
            j++;
    }

    if(j == 2)
        resultado = "O número é primo";
    else 
        resultado = "O número não é primo";
    
    document.getElementById("resultadoprimo").innerHTML = `${resultado}`;
};

let NUM = document.getElementById("num");

NUM.addEventListener("input", numeroprimo);
botao.addEventListener("click", numeroprimo);