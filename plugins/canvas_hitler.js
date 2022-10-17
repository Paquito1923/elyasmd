const Canvacord = require('canvacord')
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
   if (!text && m.mentionedJid.length == 0) return m.reply('Tag member kak, contoh *#hitler @member*')
try {
linknya = await conn.profilePictureUrl(m.mentionedJid[0])
baper = await require('node-fetch')(linknya).then(v => v.buffer())
let image = baper

Canvacord.Canvas.hitler(image)
  .then(async buffer => {
 conn.sendFile(m.chat, buffer, 'hitler.jpg', '*Shit bro, dia ternyata hitler:v*', m)
  }) 
 } catch (e) {
   m.reply('Error || Mungkin foto profile orang tersebut depresi!')
  }
}
handler.help = ['hitler (@tag)']
handler.tags = ['filter']
handler.command = /^hitler$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
