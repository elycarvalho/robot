const braco1 = document.querySelector('.braco1')
const braco2 = document.querySelector('.braco2')
const pinca = document.querySelector('.pinca')
const pontaPinca = document.querySelector('.ponta-pinca1')
const pontaPinca2 = document.querySelector('.ponta-pinca2')
let movimentoB1 = 0
let movimentoB2 = 90
let movimentoPinca = 0
let movimentoPonta = 5
let movimentoPonta2 = 60

function moveBraco1(movimento){
    if(movimento === 'desce'){
        movimentoB1 = movimentoB1 + 2
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        
        console.log('braço 1 D ' + movimentoB1)
    }
    if(movimento === 'sobe'){
        movimentoB1 = movimentoB1 - 2
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        
        console.log('braço 1 S ' + movimentoB1)
    }  
}

function moveBraco2(movimento){
    if(movimento === 'desce'){
        movimentoB2 = movimentoB2 + 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        console.log('braço 2 D ' + movimentoB2)
        
    }
    if(movimento === 'sobe'){
        movimentoB2 = movimentoB2 - 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        console.log('braço 2 S' + movimentoB2)
    }
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
}

function movePonta(movimento){
    if(movimento === 'abre'){
        movimentoPonta--
        movimentoPonta2++   
        if(movimentoPonta2 > 60) {movimentoPonta2 = 60}
        if(movimentoPonta < 5) {movimentoPonta = 5}     
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`

        console.log('abre 1 ' + movimentoPonta)
        console.log('abre 2 ' + movimentoPonta2)
        
    }
    if(movimento === 'fecha'){
        movimentoPonta++
        movimentoPonta2--
        if(movimentoPonta2 < 45) {movimentoPonta2 = 45}
        if(movimentoPonta > 20) {movimentoPonta = 20}
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        console.log('fecha 1 ' + movimentoPonta)
        console.log('fecha 2 ' + movimentoPonta2)     
    }
}

document.addEventListener('keydown', (e) => {
    console.log(e.key)
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