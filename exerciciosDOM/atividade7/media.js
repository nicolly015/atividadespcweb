let botao = document.getElementById("botao");

function mediafinal(){

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nome = document.getElementById("nome").value;

    let resultado = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10;

    document.getElementById("resultado").innerHTML = `A média final do aluno ${nome} é: ${resultado}`;
};

botao.addEventListener("click", mediafinal);