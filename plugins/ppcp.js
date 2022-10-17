let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')

let e = await conn.acak(await res.json())
conn.sendFile(m.chat, e.male ,'pria.jpg',  'Cowo', m)
await conn.sendButtonImg(m.chat, e.female,  'Cewe', wm, 'Next', '.ppcp', m)

}
handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^ppcp$/i
module.exports = handler
