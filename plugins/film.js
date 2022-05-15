let xfar = require('xfarr-api')
let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, conn:fur, args }) => {
if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
xfar.Film(args[0]).then(async data => {
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*🎞️  Tipe  :* ${i.type}\n`
txt += `*📟 Kualitas :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${await shortlink(i.link)}\n-----------------------------------------------------\n`
}
let message = await prepareWAMessageMedia({ image: await (await fetch(data[0].thumb)).buffer() }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: txt,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Pencet',
               id: 'huuu',
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
})
}
handler.help = ['film <keyword>']
handler.tags = ['film']
handler.command = /^(film)$/i

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}
