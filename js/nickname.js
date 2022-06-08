let text;

function getText(){
    text = document.getElementById("nicknameInput").value;
    console.log(text)
    changeText()
}

function changeText(){
    document.getElementById("mensagemOla").innerHTML = `Oie, ${text}. Vamos jogar?
    <br>De acordo com a opção de intervalo escolhida,<br>
    descubra o número abaixo.`
    getInterval()
}