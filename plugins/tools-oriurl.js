let fetch = require("node-fetch")
let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw `fitur ini berguna untuk mencari link asli dari shortlink
contoh 
.oriurl https://tinyurl.com/`
try{
let b = await fetch(args[0])

m.reply(b)
} catch (e) {
m.reply(`*ERROR* 
*PASTIKAN URL ANDA BENAR!*`)}
}
handler.help = ['oriurl']
handler.tags = ['tools']
handler.command = /oriurl/i

handler.limit = true

module.exports = handler
