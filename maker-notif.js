let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
 if (!text) throw `Masukkan teks
  
 *Contoh:*
 .notif elyas ganteng banget`
 if (text.length > 39) throw 'text Terlalu Panjang!\nMAX 39 HURUF!'
  m.reply('*Wait ngab*\nProses...')
  let res = `https://api.popcat.xyz/alert?text=${text}`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah jadi`, m, false)
}
handler.help = ['notif', 'notifikasi'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(notif|notifikasi)$/i
handler.limit = true
handler.register = false

module.exports = handler