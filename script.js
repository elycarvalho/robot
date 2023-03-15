const braco1 = document.querySelector('.braco1')
const braco2 = document.querySelector('.braco2')
const pinca = document.querySelector('.pinca')
const pontaPinca = document.querySelector('.ponta-pinca2')
let movimentoB1 = 0
let movimentoB2 = 90
let movimentoPinca = 0
let movimentoPonta = 55

function moveBraco1(movimento){
    if(movimento === 'desce'){
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        movimentoB1 = movimentoB1 + 2
        console.log(movimentoB1)
    }
    if(movimento === 'sobe'){
        braco1.style.transform = `rotate(${movimentoB1}deg)`
        movimentoB1 = movimentoB1 - 2
        console.log(movimentoB1)
    }
    
}

function moveBraco2(movimento){
    if(movimento === 'desce'){
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        movimentoB2 = movimentoB2 + 2
    }
    if(movimento === 'sobe'){
        braco2.style.transform = `rotate(${movimentoB2}deg)`
        movimentoB2 = movimentoB2 - 2
    }
}

function movePinca(movimento){
    if(movimento === 'sobe'){
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        movimentoPinca = movimentoPinca + 2
        console.log(movimentoPinca)
    }
    if(movimento === 'desce'){
        pinca.style.transform = `rotate(${movimentoPinca}deg)`
        movimentoPinca = movimentoPinca - 2
        console.log(movimentoPinca)
    }
}

function movePonta(movimento){
    if(movimento === 'abre'){
        pontaPinca.style.left = `${movimentoPonta}px`
        movimentoPonta++
    }
    if(movimento === 'fecha'){
        pontaPinca.style.left = `${movimentoPonta}px`
        movimentoPonta--
    }
}

