let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw `masukkan id dan server akun mobile legend

contoh
*.nickml 123456789 98765*`
if (!args[1]) throw `masukkan id dan server akun mobile legend

contoh
*.nickml 123456789 98765*`
try {
let url = await require("hikki-me").game.nickNameMobileLegends(`${args[0]}`, `${args[1]}`)
m.reply(` *AKUN DITEMUKAN!*
NAMA= ${url.userName}`)
} catch(e) { throw "Akun tidak di temukan"
}
}
handler.help = ['nickml <id>|<server>']
handler.tags = ['tools']
handler.command = /nickml/i

handler.limit = true

module.exports = handler
