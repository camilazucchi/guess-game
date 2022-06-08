const min = 1;
let imagem = document.querySelector('imagem');
let max
let num;
let attempts = 2;
let response

function getNum(){
    num = document.getElementById("numeroInput").value;
    setResponseText()
}

function getInterval(){
    let select = document.querySelector('#opcoes');
    let valor = select.value;
    max = valor; 
    response = getRandomInt(); 
}

function getRandomInt() {
    let value = Math.floor(Math.random() * (max - min + 1) + min); 
    console.log(value)
     return value

    }

    function setResponseText(){    
        if( response != num && attempts == 2){
            attempts--;
           return setText1();

        }if(response != num && attempts == 1){
            attempts--;
            return setText2()

        }if(attempts == 0){
            return setTextLose();
        }
        else{
            return setWin();
        }
    }

    
function setText1(){
    document.getElementById("mensagem").innerHTML = `Poxa, você errou. <br> Você tem mais duas tentativas.`
}    

function setText2(){
    document.getElementById("mensagem").innerHTML = `Poxa, você errou. <br> Você tem mais uma tentativa.`
}    

function setWin(){
    document.getElementById("mensagem").innerHTML = `Yaaaay, você acertou!`
    document.getElementById("imagem").src="/imagens/peguei-voces.png";
}    
function setTextLose(){
    document.getElementById("mensagem").innerHTML = `Que pena, acabaram suas tentativas!`
    botaoJogar.style.visibility = 'hidden';
}    