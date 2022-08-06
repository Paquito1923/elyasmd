let scrape = require('@bochilteam/scraper')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} naruto`
let json = await scrape.facebookdlv3(args[0])
let hasil = json.result[0].url
let teks = `Judul: ${json.title}`
m.reply(wait)
conn.sendFile(m.chat, hasil, 'fb.mp4', teks,m)
}
handler.help = ['fb <link>']
handler.tags = ['downloader']
handler.command = /^(fb)$/i

module.exports = handler
