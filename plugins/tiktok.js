const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.reply(m.chat, wait, m)
conn.sendMessage(m.chat, { video: { url: nowm }, mimetype: 'video/mp4', fileName: `.mp4`}, {quoted: m})
}
handler.help = ['tiktok', 'tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokdl|tiktok|tiktoknowm)$/i
module.exports = handler