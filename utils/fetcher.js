const fetch = require ('node-fetch')
const FormData = require ('form-data')
const fs = require ('fs')
const {fromBuffer} = requer ('tipo de arquivo')
const resizeImage = require ('./ imageProcessing')

/ **
 * Obter Json do Url
 *
 * @ param {String} url
 * @ param {Object} opções
 * /

const fetchJson = (url, opções) =>
    nova promessa ((resolver, rejeitar) =>
        buscar (url, opções)
            .então (resposta => resposta.json ())
            .então (json => resolver (json))
            .catch (err => {
                console.error (err)
                rejeitar (errar)
            })
    )

/ **
 * Obter texto do URL
 *
 * @param {String} url
 * @param {Object} options
 * /

const fetchText = (url, opções) => {
    retornar nova promessa ((resolver, rejeitar) => {
        return fetch (url, opções)
            .então (resposta => response.text ())
            .então (texto => resolver (texto))
            .catch (err => {
                console.error (err)
                rejeitar (errar)
            })
    })
}

/ **
 * Buscar base64 do url
 * @param {String} url
 * /

const fetchBase64 = (url, mimetype) => {
    retornar nova promessa ((resolver, rejeitar) => {
        console.log ('Obter base64 de:', url)
        return fetch (url)
            .então ((res) => {
                const _mimetype = mimetype || res.headers.get ('content-type')
                res.buffer ()
                    .then ((result) => resolve (`data: $ {_ mimetype}; base64,` + result.toString ('base64')))
            })
            .catch ((err) => {
                console.error (err)
                rejeitar (errar)
            })
    })
}

/ **
 * Carregar imagem para Telegra.ph
 *
 * @param {String} buffer de imagem base64
 * @param {Boolean} resize
 * /

const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promessa-executor
    retornar nova promessa (assíncrona (resolver, rejeitar) => {
        const {ext} = await fromBuffer (buffData)
        const filePath = 'utils / tmp.' + ext
        const _buffData = type? aguardar resizeImage (buffData, false): buffData
        fs.writeFile (filePath, _buffData, {encoding: 'base64'}, (err) => {
            if (err) retornar rejeitar (err)
            console.log ('Enviando imagem para o servidor telegra.ph ...')
            const fileData = fs.readFileSync (filePath)
            const form = new FormData ()
            form.append ('arquivo', arquivoData, 'tmp.' + ext)
            fetch ('https://telegra.ph/upload', {
                método: 'POST',
                body: form
            })
                .então (res => res.json ())
                .então (res => {
                    if (res.error) retorna rejeitar (res.error)
                    resolver ('https://telegra.ph' + res [0] .src)
                })
                .então (() => fs.unlinkSync (filePath))
                .catch (errar => rejeitar (errar))
        })
    })
}

module.exports = {
    fetchJson,
    fetchText,
    fetchBase64,
    Enviar imagens
}