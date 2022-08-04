const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, { conn, text, participants }) => {
const {delay} = require("@adiwajshing/baileys")

async function f(){
let getGroups = await conn.groupFetchAllParticipating()

let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])

let anu = groups.map(v => v.id)

m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)

for (let i of anu) {

await delay(100)

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
               displayText: 'oke',
               id: 'ok',
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

m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group Chat`)

}

return f()
}
handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc)$/i

handler.owner = true

module.exports = handler
