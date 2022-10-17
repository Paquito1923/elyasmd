const Canvacord = require('canvacord')
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Contoh penggunaan, Reply atau send image dengan caption #burn'
  try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
let image = await q.download()

Canvacord.Canvas.burn(image)
  .then(async buffer => {
 conn.sendFile(m.chat, buffer, 'invert.jpg', '*EFFECT = BURN (AGAK GELAP)*', m)
  }) 
 } catch (e) {
   m.reply('Error || Pastikan menggunakan image!!\njika masih error yah dari sononya:v')
//m.reply(`${e}`)
  }
}
handler.help = ['burn']
handler.tags = ['filter']
handler.command = /^burn$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
