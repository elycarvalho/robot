const braco1 = document.querySelector('.braco1')
const braco2 = document.querySelector('.braco2')
const pinca = document.querySelector('.pinca')
const pontaPinca = document.querySelector('.ponta-pinca1')
const pontaPinca2 = document.querySelector('.ponta-pinca2')
const led = document.querySelector('.led')
const mesa = document.querySelector('.mesa')
const main = document.querySelector('main')
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
        if(movimentoB1 > 32) {movimentoB1 = 32}
        movimentoB1 = movimentoB1 + 2
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        console.log('braço 1 D ' + movimentoB1)
        console.log(braco1.style.transform = `rotate(${movimentoB1}deg)`)
    }
    if(movimento === 'sobe'){
        movimentoB1 = movimentoB1 - 2
        if(movimentoB1  < -18) {movimentoB1 = -18}
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        console.log('braço 1 S ' + movimentoB1)
    } 

    gravaMovimentos.push('braco1')
    gravaMovimentos.push(movimentoB1)
}

function moveBraco2(movimento){
    if(movimento === 'desce'){
        if(movimentoB2 > 120) {movimentoB2 = 120}
        movimentoB2 = movimentoB2 + 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        console.log('braço 2 D ' + movimentoB2)  
    }
    if(movimento === 'sobe'){
        if(movimentoB2 < 58) {movimentoB2 = 58}
        movimentoB2 = movimentoB2 - 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        console.log('braço 2 S' + movimentoB2)
    }
    gravaMovimentos.push('braco2')
    gravaMovimentos.push(movimentoB2)
}

function movePinca(movimento){
    if(movimento === 'sobe'){
        movimentoPinca = movimentoPinca + 2
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        console.log('giro pinça S ' + movimentoPinca)
    }
    if(movimento === 'desce'){
        movimentoPinca = movimentoPinca - 2
        pinca.style.transform = `rotate(${movimentoPinca}deg)`    
        console.log('giro pinça D ' + movimentoPinca)
    }
    gravaMovimentos.push('pinca')
    gravaMovimentos.push(movimentoPinca)
}

function movePonta(movimento){
    if(movimento === 'abre'){
        movimentoPonta--
        movimentoPonta2++   
        if(movimentoPonta2 > 65) {movimentoPonta2 = 65}
        if(movimentoPonta < 5) {movimentoPonta = 5}     
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        
        if(movimentoPonta2 > 56 && movimentoB2 === 56 && movimentoB1 === 34){
            soltar()
        }
        console.log('abre 1 ' + movimentoPonta)
        console.log('abre 2 ' + movimentoPonta2)   
    }
    if(movimento === 'fecha'){
        movimentoPonta++
        movimentoPonta2--
        if(movimentoPonta2 < 45) {movimentoPonta2 = 45}
        if(movimentoPonta > 25) {movimentoPonta = 25}

        if(movimentoPonta === 14 && movimentoB2 > 114){
            capturar()
        }
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        console.log('fecha 1 ' + movimentoPonta)
        console.log('fecha 2 ' + movimentoPonta2)     
    }

    gravaMovimentos.push('pontaPinca')
    gravaMovimentos.push(movimentoPonta2)
    gravaMovimentos.push('pontaPinca2')
    gravaMovimentos.push(movimentoPonta)
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
        console.log('capturou')
        
    } else {alert('fora da posição!')}
}

function soltar(){
    objetoC.remove()
    objetoM = document.createElement('div')
    objetoM.className = "objetoM"
    main.appendChild(objetoM)
    led.style.backgroundColor = '#44704A'
    console.log(objetoM)
}

let intervalo = ''
function playMoves(){
    intervalo = setInterval(playMovimento, 500)
}

let index = 0

function playMovimento(){
    if(index = gravaMovimentos.length){clearInterval(intervalo)}
    switch(gravaMovimentos[i]){
    case 'braco1':
        braco1.style.transform = `rotate(`
    }
}