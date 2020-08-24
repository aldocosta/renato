const ServiceImbd = require('./services/service.imdb')
const ServiceMysql = require('./services/service.mysql')

const si = new ServiceImbd()
const smysql = new ServiceMysql()

async function Main() {

    //trago as urls -- ,mysql service
    // chamo meu scrap

    try {
        let ret = await si.scrapMaioresBilheterias('url')
    } catch (error) {
        //trato os erros pra eu corrigir
        //gravo no banco o lgo
    }

}

Main()

si.scrapMaioresBilheterias('https://www.imdb.com/list/ls046041958/')
    .then(async (bilheterias) => {

        smysql.conectar()

        for (let index = 0; index < bilheterias.length; index++) {

            const bilheteria = bilheterias[index];

            let query = `insert into tbMaioresBilheterias(nm_bilheteria,vl_valor)values('${bilheteria.name}','${bilheteria.gross}')`

            smysql.executeQuery(query)
                .then((data) => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })

        }

        console.log(bilheterias)
    })
    .catch((err) => {
        console.log(err)
    })