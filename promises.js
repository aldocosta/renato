const p1 = new Promise(function (resolved, reject) {

    try {
        setTimeout(function () {
            resolved(1)
        }, 5000)
    } catch (error) {
        reject(error)
    }
})
 

const p2 = new Promise(function (resolved, reject) {

    try {
        setTimeout(function () {
            resolved('Ola')
        }, 1000)
    } catch (error) {
        reject(error)
    }
})


p1.then(data => {
    //faça tal coisa
    console.log('Eu sou o data:' + data)
    
})
    // .then(data => {
    //     console.log('Agora é o ', data)
    // })
    .catch(err => {
        console.log('Erro capturado', err)
    })