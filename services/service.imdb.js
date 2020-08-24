'use strict'

// function xpto() { }
//             const funcao = function () { }

//             const outra = () => { }

const puppeteer = require('puppeteer')

function ImdbService() {

    this.scrapMaioresBilheterias = async function (url) {

        try {

            const browser = await puppeteer.launch({ headless: false })
            const page = await browser.newPage()

            await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 })

            const nomes = await page.evaluate(() => {
                let arr = []

                let arrayAs = document.querySelectorAll('.lister-item-header a')

                for (let index = 0; index < arrayAs.length; index++) {
                    const element = arrayAs[index].text;
                    let gross = ''

                    try {


                        let xel = arrayAs[index].parentElement.parentElement.querySelectorAll('span:nth-child(5)')[1]

                        if (xel) {
                            if (xel.length) {
                                gross = arrayAs[index].parentElement.parentElement.querySelectorAll('span:nth-child(5)')[1].textContent
                            }
                        }


                    } catch (error) {

                    }

                    // document.querySelectorAll('.lister-item-header a')[0].
                    // parentElement.parentElement.querySelectorAll('span:nth-child(5)')[1].textContent

                    arr.push({ name: element, gross: gross })
                }

                return arr
            })

            page.close()
            browser.close()

            return nomes
        } catch (error) {

        }
    }




}

module.exports = ImdbService