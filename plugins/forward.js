let handler = async (m, { conn, text, args }) => {
  if(!m.quoted) throw 'reply pesan atau masukkan nomor tujuan'
/*  if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }
  let exists = await conn.onWhatsApp(number)
  if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)*/
  let target = m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  conn.copyNForward(target + '@s.whatsapp.net', m.quoted.fakeObj, true)
  conn.reply(target + '@s.whatsapp.net', "pengirimnya⬆️", m)
}
handler.command = /^(forward|terusin|teruskan)$/i
handler.limit = true
handler.help = ['forward <nomor tujuan>' ,'teruskan <nomor tujuan>' ]
//handler.rowner = true
module.exports = handler

