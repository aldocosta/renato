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
            resolved(2)
        }, 5000)
    } catch (error) {
        reject(error)
    }
})


//function start() {

async function doSome() {

    let ret = await p1

    let ret2 = await p2

    let x = ret + ret2

    console.log(x)
}

doSome()

//}