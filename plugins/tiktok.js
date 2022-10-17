let fetch = require('node-fetch')
let bo = require('@bochilteam/scraper')

let handler = async (m, { conn, text, usedPrefix }) => {
	if (!text) throw `Input URL\nexample:\n.tiktok https://www.tiktok.com/@omagadsus/video/7025456384175017243`
	if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw 'Invalid URL'
let hasil = await bo.savefrom(`${text}`)
let hasiil = hasil.url[0].url
let meta = await getInfo(text).catch(_ => {})
	
await m.reply('_In progress, please wait..._') 

conn.sendFile(m.chat, hasiil,  'tiktok.mp4', 'nih bang', m)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i

module.exports = handler

async function getInfo(url) {
	// url = (await fetch(url)).url
	let id = url.split('?')[0].split('/')
	let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
	return res?.seoProps?.metaParams
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
