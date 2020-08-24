// 'use strict'
// const cron = require('node-cron')
// cron.schedule('* * * * *', () => {
// })

function doSome() {
    console.log('Ola')
}

function fazConsultaNoWebService(meumetodo) {
   setTimeout(function(){
       console.log('Acabou')
       let ret = meumetodo()
   },5000) 
}

console.log('Antes')

fazConsultaNoWebService(doSome)

console.log('Depois')