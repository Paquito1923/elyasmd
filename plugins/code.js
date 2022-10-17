let fs = require('fs')
let handler = async (m, {conn, text}) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
if (!teks) throw `Masukkan text
Contoh: .code hello world`
await m.reply('```tunggu sebentar...```')
     let Carbon = require("unofficial-carbon-now")
let carbon = new Carbon.createCarbon()
    .setCode(`${teks}`)
let ok = await Carbon.generateCarbon(carbon)
conn.sendFile(m.chat, ok, 'ok.jpg', '', '', m)
}
handler.help = ['code']
handler.tags = ['tools']
handler.command = /^(code)$/i

handler.fail = null

module.exports = handler
