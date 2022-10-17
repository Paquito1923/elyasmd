let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan text\nContoh: .ttp elyas ganteng'
  m.reply('_*Proses...*_')
  let res = (`https://api.xteam.xyz/ttp?file&text=${text}` || `http://leyscoders-api.herokuapp.com/api/textto-image?text=${text}`)
  conn.sendImageAsSticker(m.chat, res, m, {packname: global.packname, author: global.author})
}
handler.help = ['ttp <text>']
handler.tags = ['maker']
handler.command = /^(ttp)$/i
handler.limit = true
handler.register = false

module.exports = handler
