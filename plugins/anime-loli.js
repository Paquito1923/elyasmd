let handler = async (m, { conn }) => {
let apr = 'https://api.zacros.my.id/randomimg/loli'
    conn.sendButtonImg(m.chat, apr, 'Nih', wm2, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
