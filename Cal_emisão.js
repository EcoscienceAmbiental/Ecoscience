let q1 = 0
let q1i5 =0
let q1i55 = 0
let q2 = 0
let q2i5 = 0
let q3 = 1
let q4 = 0
let q5 = 0
let q6 = 0
let q7 = 0

let g_carbono = q1 + q1i5 + q1i55 + q2 + q3 + q4 + q5 + q6 + q7

//transporte:emissão de co2 => passageiro por km
function escolha1(nome) {
    if (nome == 'carro')
        q1 = 0.1268

    else if (nome == 'moto')
        q1 = 0.0711

    else if (nome == 'Bicicleta')
        q1 = 0.0016

    else if (nome == 'Ônibus')
        q1 = 0.016

    else if (nome == 'pé')
        q1 = 0
}

function escolha0i5(nome){
    if ( nome== 'nenhumc')
        q1i5 = 0

    else if (nome == '1c')
        q1i5= 1

    else if (nome == '2c')
        q1i5= 2

    else if(nome == '3+c')
        q1i5= 3
}
// emissão por litro
function escolha00i5(nome){
    if (nome == 'combustível'){
        q1i55 = 2.28
    }

    else if (nome == 'biocombustível'){
        q1i55 = 1.722
    }

    //emissão por km
    else if( nome == 'elétrico'){
        q1i55 = 0.234
    }

    else if ( nome == 'híbrido') {
        q1i55= 0.736
    }

}

function escolha2(nome) {
    if (nome == '1-2')
        q2 = 1.5

    else if (nome == '2-3')
        q2 = 2.5

    else if (nome == '3-4')
        q2 = 3.5

    else if (nome == '4+')
        q2 = 4
}

function escolha2i5(nome) {
    if (nome == 'Vegana')
        q2i5 = 2.9

    else if (nome == 'Vegetariana')
        q2i5 = 4.1

    else if (nome == 'Pescetariana')
        q2i5 = 5.04

    else if (nome == 'Carnívora')
        q2i5 = 7.2
}

function escolha3(nome) {
    if (nome == 'diariamente')
        q3 = 7

    else if (nome == 'al_dias')
        q3 = 4

    else if (nome == 'raramente')
        q3 = 1.5
}

function escolha4(nome) {
    if (nome == 'eletrico')
        q4 = 0.0817 //media de kWh por dia

    else if (nome == 'gas')
        q4 = 2.1 //media de 2.1kg por m²

    else if (nome == 'biomassa')
        q4 = 0.2 //media da queima da biomassa por kWh de energia térmica

    else if (nome == 'semaquecimento')
        q4 = 0

}

function escolha5(nome) {
    if (nome == 'sim')
        q5 = 2

    else if (nome == 'nao')
        q5 = 1
}

function escolha6(nome) {
    if (nome == 'sim')
        q6 = 0.0817

    else if (nome == 'nao')
        q6 = 1.4 * 0.0817  //aparelhos que não são econômicos aumentam em média 40% do consumo de kWh 
}

function escolha7(nome) {
    if (nome == 'sim')
        q7 = 1.015

    else if (nome == 'nao')
        q7 = 1

    else if (nome == 'raramente')
        q7 = 1.005

}

let valor_final=1 

function confirmar() {
    g_carbono = (q1 + q1i5*q1i55 + q2 + q4 * q5 + q6 + q7) * 7 + q3*q2i5
    let valor_final = g_carbono.toFixed(2);
    document.getElementById("em").innerHTML = 'Você consome ' + valor_final + ' kg de carbono por semana'
}

function nivel(valor_final = g_carbono){
    if (valor_final <= 50){
        document.getElementById("quantidade").innerHTML = "Parabéns!!! A sua pegada de carbono é ideal. Continue assim!"
    }

    else if (valor_final>=51 , valor_final<=100){
        document.getElementById("quantidade").innerHTML = "Você está quase lá! O seu consumo é considerado como médio. Caso queira dicas de como melhorar, busque o nosso Ecoboot."
        
    }

    else if (valor_final>=101){
        document.getElementById("quantidade").innerHTML = "Tome cuidado! O seu nível de emissão caracteriza-se como alto, comece a mudar seus hábitos. Caso queira dicas de como melhorar, consulte nosso Ecoboot. "
    }
}


