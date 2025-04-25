

function mostrarNome(){
    const nome = document.getElementById("nomeInput").value;
    document.getElementById("resultado").textContent = "Olá " + nome + " vamos começar?"
    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("botão2").style.display = "inline-block";
}

function ocultarBotão(){
    setTimeout(function() {
        document.getElementById("botão2").style.display="none";
        document.getElementById("resultado").style.display= "none";}, 1000);
    
};

function MostrarDivCar(nome){
    const div = document.getElementById("meio-005");
    div.style.display="block"
};

function EsconderDivCar(nome){
    setTimeout(function(){
        const div = document.getElementById("meio-005");
        div.style.display= "none";}, 1000 );
};

function MostrarCarne(nome){
    const quiz = document.getElementById("meio-2");
    quiz.style.display="block"
};

function EsconderCarne(nome){
    setTimeout( function (){
        const quiz = document.getElementById("meio-2");
        quiz.style.display= "none";}, 500);
};

