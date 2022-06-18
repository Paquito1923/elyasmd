let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
 if (!text) throw `Masukkan teks
  
 *Contoh:*
 .biden elyas ganteng banget`
  m.reply('*Wait ngab*\nProses...')
  let res = `https://api.popcat.xyz/biden?text=${text}`
  conn.sendFile(m.chat, res, 'biden.jpg', `Sudah jadi`, m, false)
}
handler.help = ['biden'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(biden)$/i
handler.limit = true
handler.register = false

module.exports = handler