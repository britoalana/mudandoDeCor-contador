let count = 0
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) =>{
 btn.addEventListener('click', (e)=>{
    const style = e.currentTarget.classList
    // console.log(style)

    if(style.contains('diminuir')){
        count--
        value.style.color = 'red'
    }else if(style.contains('acrescentar')){
        count++
        value.style.color = 'green'
    } else{
        count = 0
        value.style.color = 'hsl(209, 61%, 16%)'
    } 

    value.textContent = count
 })
})