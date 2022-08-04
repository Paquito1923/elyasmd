let handler = async (m, { conn, text }) => {
if (!text) throw `Kirim atau Balas pesan dengan caption *.react <emote>*

 *Contoh:*
 .react 🗿`
 if (text.length > 2) throw 'Hanya bisa Menggunakan 1 emote🗿🙏'
const reactionMessage = { react : {text:`${text}`, key : m.quoted ? m.quoted.fakeObj.key : m.key}}
conn.sendMessage(m.chat, reactionMessage)
}
handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i

module.exports = handler
