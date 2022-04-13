let fs = require('fs')
let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let chats = Object.keys(conn.chats)
    let anu = chats.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat all, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of chats) {
    await delay(500)
    let pp = fs.readFileSync('./src/welcome.jpg')
    await conn.sendHButtonLoc(i,pp, pesan, 'BROADCAST', "📍Instagram", instagram, `OKE`, `ok`, m)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
handler.help = ['bc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcast|bc)?$/i

handler.owner = true

module.exports = handler
