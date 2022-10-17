let handler = m => m
const didyoumean = require('didyoumean')

handler.before = async function(m, { usedPrefix, match}) {
	let b = m.quoted ? m.quoted  : m
	if (b.mtype == "buttonsMessage" && b.fromMe) return
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let name = await this.getName(who)
    let caption = `👋 Hai *@${who.split("@")[0]}*, Apakah yang kamu maksud: *.${mean}*\n`
		if (mean) this.send2But(m.chat, caption, wm, '✅ Iya', `.${mean} ${text}`, '❌ Bukan', '.?', m, { mentions: this.parseMention(caption) })
	}
}
module.exports = handler
