// function greeding(doAnyThing, name){
//     doAnyThing(name)
// }

// // const numbers = [45, 28, 28]

// function doAnyThing(name){
//     console.log('hi mama', name)
// }
//  greeding(doAnyThing, 'Rashed')


function greeding(greedingHandler, name){
    greedingHandler(name)
}

function greedingHandler(name){
    console.log('Wel come', name)
}

function goodMorning(name){
    console.log('Good Morning',name)
}

function goodEvening(name){
    console.log('Good Evening', name)
}

greeding(greedingHandler, 'Alomgir')
greeding(goodMorning, 'josim')
greeding(goodEvening, 'Faruk')