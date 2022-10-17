
let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, {conn}) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `${ucapan()}
Halo👋
Ada Yang Bisa Saya Bantu?
Tekan *MENU*

Runtime: ${uptime}`
     conn.sendBut(m.chat, anu, date, 'Menu', '.menu', m)
}
handler.customPrefix = /^bot$/i // ketik bot (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = "Selamat pagi🌄"
  }
  if (time > 9) {
    res = "Selamat siang🏞️"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 19) {
    res = "Selamat malam🌃"
  }
  return res
}
function gambar() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = fs.readFileSync('./media/pagi.jpg')
  }
  if (time > 9) {
    res = fs.readFileSync('./media/siang.jpg')
  }
  if (time >= 15) {
    res = fs.readFileSync('./media/sore.jpg')
  }
  if (time >= 19) {
    res = fs.readFileSync('./media/malam.jpg')
  }
  return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
 
