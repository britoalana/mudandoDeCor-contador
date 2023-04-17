const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //cores disponíveis para a mudança
const btn = document.getElementById('btn') // obter o botão
const color = document.querySelector('.color') //obter a cor do span

btn.addEventListener('click', ()=>{ //evento click do botão
    const randomNumber = getRandomNumber() // constante com o valor do número gerado aleatoriamente entre os valores de vetores existentes
    document.body.style.backgroundColor = colors[randomNumber] // mudar a cor do body de acordo com o número
    color.textContent = colors[randomNumber] //mudar o nome da cor no span 
})

console.log(getRandomNumber())

function getRandomNumber (){ 
    return Math.floor( Math.random()*  colors.length) // função para gerar um número aleatório entre o número de índices de vetores
}