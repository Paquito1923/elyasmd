let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let user = global.db.data.users[who]
let anu = `
╭───❑ 「 BANK 🏦 」 ❑────
│
│ ✇ 👤Name: ${user.name}
│ ✇ 🎟️Limit: ${user.limit}
│ ✇ 💵Money: ${user.money}
│ ✇ 🌟Exp: ${user.exp}
│ ✇ 〽️Level: ${user.level}
│ ✇ 🏅Role: ${user.role}
╰❑`     
 
await m.reply(anu) 
}
handler.help = ['bank', 'dompet', 'dompet @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|dompet)$/i

module.exports = handler
