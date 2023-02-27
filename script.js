function somar(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "Resultado é: ";
    document.getElementById("resultado").innerHTML += Number(valor1.value) + Number(valor2.value);
    limparFormulario();
}

function subtrair(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "Resultado é: ";
    document.getElementById("resultado").innerHTML += Number(valor1.value) - Number(valor2.value);
    limparFormulario();
}

function multiplicar(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "Resultado é: ";
    document.getElementById("resultado").innerHTML += Number(valor1.value) * Number(valor2.value);
    limparFormulario();
}

function dividir(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "Resultado é: ";
    document.getElementById("resultado").innerHTML += Number(valor1.value) / Number(valor2.value);
    limparFormulario();
}

function limparFormulario(){
    document.getElementById("formulario").reset();
}