const { igdl } = require('../lib/scrape')
const { delay } = require("@adiwajshing/baileys")
let bo = require("@bochilteam/scraper")
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/.*(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`

 /* igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
    	await delay(2000)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*nih*', m)
    }
  }) */
  try {
 let a = await bo.instagramdlv2(args[0])
//let b = a[0].url.split("snapsave.app")[1]
await conn.sendFile(m.chat, a[0].url.split("snapsave.app")[1] ,null, "ini video nya", m)
} catch {
	try {
	let a = await bo.instagramdlv3(args[0])
//let b = a[0].url.split("snapsave.app")[1]
await conn.sendFile(m.chat, a[0].url ,null, "ini video nya", m)
} catch { throw "coba gunakan perintah .savefrom link"
}
}
}
handler.help = ['ig2'].map(v => v + ' <url>')
handler.alias = ["instagram", "igdl", "instagramdl"]
handler.tags = ['downloader']
//handler.command = /^(ig|instagram)$/i
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

module.exports = handler
