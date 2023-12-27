

const key = "84de7e74dc408e8ca2a5f88d3ab96162"

function DadosNaTela(dadosServidor){
    console.log(dadosServidor)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dadosServidor.name
    document.querySelector(".temp").innerHTML = Math.floor(dadosServidor.main.temp) + "°C"
    document.querySelector(".tempo-previsao").innerHTML = dadosServidor.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dadosServidor.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dadosServidor.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dadosServidor = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    DadosNaTela(dadosServidor);
}

function botao() {
    const cidade = document.querySelector(".input-pesquisa").value

    buscarCidade(cidade)
}