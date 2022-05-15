const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
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
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: `🅛=limit 🅟=premium`,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍Instagram',
               url: instagram
             }

           },
           {
             quickReplyButton: {
               displayText: 'Oke',
               id: 'oke',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )   
     }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
handler.help = ['bc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcasta|bc)?$/i

handler.owner = true

module.exports = handler
