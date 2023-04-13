const braco1 = document.querySelector('.braco1')
const braco2 = document.querySelector('.braco2')
const pinca = document.querySelector('.pinca')
const pontaPinca = document.querySelector('.ponta-pinca1')
const pontaPinca2 = document.querySelector('.ponta-pinca2')
const led = document.querySelector('.led')
const mesa = document.querySelector('.mesa')
const main = document.querySelector('main')
const btnGrava = document.querySelector('.btn-grava')
const pnB1 = document.querySelector('.b1')
const pnB2 = document.querySelector('.b2')
const pnPin = document.querySelector('.pin')
const pnPon = document.querySelector('.pon')
let gravaMovimentos = []
let statusGrava = 'off'
let movimentoB1 = 0
let movimentoB2 = 90
let movimentoPinca = 0
let movimentoPonta = 5
let movimentoPonta2 = 65
const objeto = document.querySelector('.objeto')

function moveBraco1(movimento){
    if(movimentoB2 > 90 && movimentoB1 > 18) {movimentoB1 = 18}
    if(movimento === 'desce'){
        if(movimentoB1 > 30) {movimentoB1 = 30}
        movimentoB1++
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        pnB1.innerHTML = movimentoB1
        console.log('braço 1 D ' + movimentoB1)
        console.log(braco1.style.transform = `rotate(${movimentoB1}deg)`)
    }
    if(movimento === 'sobe'){
        movimentoB1--
        if(movimentoB1  < -18) {movimentoB1 = -18}
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        pnB1.innerHTML = movimentoB1
        console.log('braço 1 S ' + movimentoB1)
    } 
    if(statusGrava === 'on'){
        gravaMovimentos.push('braco1')
        gravaMovimentos.push(movimentoB1)
    }
}

function moveBraco2(movimento){
    if(movimento === 'desce'){
        if(movimentoB2 > 115) {movimentoB2 = 115}
        movimentoB2++
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        pnB2.innerHTML = movimentoB2
        console.log('braço 2 D ' + movimentoB2)  
    }
    if(movimento === 'sobe'){
        if(movimentoB2 < 58) {movimentoB2 = 58}
        movimentoB2--
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        pnB2.innerHTML = movimentoB2
        console.log('braço 2 S' + movimentoB2)
    }
    if(statusGrava === 'on'){
        gravaMovimentos.push('braco2')
        gravaMovimentos.push(movimentoB2)
    }
}

function movePinca(movimento){
    if(movimento === 'sobe'){
        movimentoPinca++
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        pnPin.innerHTML = movimentoPinca
        console.log('giro pinça S ' + movimentoPinca)
    }
    if(movimento === 'desce'){
        movimentoPinca--
        pinca.style.transform = `rotate(${movimentoPinca}deg)` 
        pnPin.innerHTML = movimentoPinca   
        console.log('giro pinça D ' + movimentoPinca)
    }
    if(statusGrava === 'on'){
        gravaMovimentos.push('pinca')
        gravaMovimentos.push(movimentoPinca)
    }
}

function movePonta(movimento){
    if(movimento === 'abre'){
        movimentoPonta--
        movimentoPonta2++   
        if(movimentoPonta2 > 65) {movimentoPonta2 = 65}
        if(movimentoPonta < 5) {movimentoPonta = 5}     
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        pnPon.innerHTML = movimentoPonta
        if(movimentoPonta2 > 56 && movimentoB2 === 56 && movimentoB1 === 34){
            soltar()
        }
        console.log('abre 1 ' + movimentoPonta)
        console.log('abre 2 ' + movimentoPonta2)   
    }
    if(movimento === 'fecha'){
        movimentoPonta++
        movimentoPonta2--
        if(movimentoPonta2 < 50) {movimentoPonta2 = 50}
        if(movimentoPonta > 20) {movimentoPonta = 20}
        pnPon.innerHTML = movimentoPonta
        if(movimentoPonta === 14 && movimentoB2 > 114){
            capturar()
        }
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        console.log('fecha 1 ' + movimentoPonta)
        console.log('fecha 2 ' + movimentoPonta2)     
    }
    if(statusGrava === 'on'){
        gravaMovimentos.push('pontaPinca')
        gravaMovimentos.push(movimentoPonta2)
        gravaMovimentos.push('pontaPinca2')
        gravaMovimentos.push(movimentoPonta)
    }
}

document.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowUp':
          moveBraco1('sobe')
          console.log('a')
          break
        case 'ArrowDown':
          moveBraco1('desce')
          console.log('b')
          break
        case 'ArrowLeft':
            moveBraco2('sobe')
            break
        case 'ArrowRight':
            moveBraco2('desce')
            break
        case 'd':
            movePinca('sobe')
            break
        case 'a':
            movePinca('desce')
            break
        case 'z':
            movePonta('fecha')
            break
        case 'c':
            movePonta('abre')
    }
})

function capturar(){
    if(movimentoB1 === 0 && movimentoB2 > 114 && movimentoPonta === 14){
        objeto.remove()
        objetoC = document.createElement('div')
        objetoC.className = "objetoC"
        pinca.appendChild(objetoC)
        led.style.backgroundColor = '#51EC66'

        if(statusGrava === 'on'){
            gravaMovimentos.push('captura')
        }
    }
}

function soltar(){
    objetoC.remove()
    objetoM = document.createElement('div')
    objetoM.className = "objetoM"
    main.appendChild(objetoM)
    led.style.backgroundColor = '#44704A'
    console.log(objetoM)
    
    if(statusGrava === 'on'){
        gravaMovimentos.push('solta')
    }
}

let intervalo = ''
let index = 0

function playMoves(){
    intervalo = setInterval(playMovimento, 20)
    index = 0
}

function gravar(){
    gravaMovimentos = []
    statusGrava = 'on'
    btnGrava.style.backgroundColor = 'red'
    btnGrava.style.color = '#fff'
}

function playMovimento(){
    objetoM.remove()
    if(index === gravaMovimentos.length){clearInterval(intervalo)}
    switch(gravaMovimentos[index]){
        case 'braco1':
            braco1.style.transform = `rotate(${gravaMovimentos[(index + 1)]}deg)`
            break
        case 'braco2':
            braco2.style.transform = `rotate(${gravaMovimentos[(index + 1)]}deg)`
            break
        case 'pinca':
            pinca.style.transform = `rotate(${gravaMovimentos[(index + 1)]}deg)`
            break
        case 'pontaPinca':
            pontaPinca.style.left = `${gravaMovimentos[(index + 1)]}px`
            break
        case 'pontaPinca2':
            pontaPinca2.style.left = `${gravaMovimentos[(index + 1)]}px`
            break
        case 'captura':
            objeto.remove()
            objetoC = document.createElement('div')
            objetoC.className = "objetoC"
            pinca.appendChild(objetoC)
            led.style.backgroundColor = '#51EC66'
            break
        case 'solta':
            objetoC.remove()
            objetoM = document.createElement('div')
            objetoM.className = "objetoM"
            main.appendChild(objetoM)
            led.style.backgroundColor = '#44704A'
    }
    index++
}