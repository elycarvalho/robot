const braco1 = document.querySelector('.braco1')
const braco2 = document.querySelector('.braco2')
const pinca = document.querySelector('.pinca')
const pontaPinca = document.querySelector('.ponta-pinca1')
const pontaPinca2 = document.querySelector('.ponta-pinca2')
let movimentoB1 = 0
let movimentoB2 = 90
let movimentoPinca = 0
let movimentoPonta = 50
let movimentoPonta2 = 10

function moveBraco1(movimento){
    if(movimento === 'desce'){
        movimentoB1 = movimentoB1 + 2
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        
        console.log(movimentoB1)
    }
    if(movimento === 'sobe'){
        movimentoB1 = movimentoB1 - 2
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        
        console.log(movimentoB1)
    }  
}

function moveBraco2(movimento){
    if(movimento === 'desce'){
        movimentoB2 = movimentoB2 + 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        
    }
    if(movimento === 'sobe'){
        movimentoB2 = movimentoB2 - 2
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        
    }
}

function movePinca(movimento){
    if(movimento === 'sobe'){
        movimentoPinca = movimentoPinca + 2
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        
        console.log(movimentoPinca)
    }
    if(movimento === 'desce'){
        movimentoPinca = movimentoPinca - 2
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        
        console.log(movimentoPinca)
    }
}

function movePonta(movimento){
    if(movimento === 'abre'){
        movimentoPonta--
        movimentoPonta2++
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`
        
    }
    if(movimento === 'fecha'){
        movimentoPonta++
        movimentoPonta2--
        pontaPinca.style.left = `${movimentoPonta2}px`
        pontaPinca2.style.left = `${movimentoPonta}px`     
    }
}

document.addEventListener('keydown', (e) => {
    console.log(e)
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
        case 'a':
            movePinca('sobe')
            break
        case 'd':
            movePinca('desce')
            break
        case 'z':
            movePonta('abre')
            break
        case 'c':
            movePonta('fecha')
    }
})