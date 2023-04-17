const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //caracteres presentes nas cores hex
const btn = document.getElementById('btn') // obter o botão
const color = document.querySelector('.color') //obter a cor do span

btn.addEventListener('click', () => {
    let hexColor = '#' // pois as cores hexadecimais começam com #

    for (let i = 0; i < 6; i++) { //devido as cores hex terem 6 caracteres
        hexColor += hex[getRandomNumber()]

    }

    document.body.style.backgroundColor = hexColor// mudar a cor do body de acordo com o número
    color.textContent = hexColor //mudar o nome da cor no span 
})


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length) // função para gerar um número aleatório entre o número de índices de vetores
}