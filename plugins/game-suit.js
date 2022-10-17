let handler = async (m, { text, usedPrefix }) => {
 
    if (!text) conn.send3But(m.chat, `pilih di bawah ini untuk melakukan suit`, 'suit' ,'Batu🗿', '.suit batu', 'gunting✂️', '.suit gunting', 'kertas📄', '.suit kertas', m)
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        conn.sendBut(m.chat,`*Seri!*\n\nkamu: ${text}\nBot    : ${astro}`, '😱😱😱', 'Lagi', '.suit', m)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 1000
            conn.sendBut(m.chat,`*Kamu menang!*\n+Rp1000\n\nKamu: ${text}\nBot    : ${astro}`, '🗿🗿', 'lagi', '.suit', m)
        } else {
            conn.sendBut(m.chat,`*Kamu kalah!*\n\nkamu: ${text}\nBot    : ${astro}`, 'wkwk mampus😂', 'Lagi', '.suit', m)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 1000
            conn.sendBut(m.chat,`*Kamu menang!*\n+Rp1000\n\nKamu: ${text}\nBot    : ${astro}`, '🗿🗿', 'lagi', '.suit', m)
        } else {
            conn.sendBut(m.chat, `*Kamu kalah!*\n\nkamu: ${text}\nBot    : ${astro}`, 'wkwk mampus😂', 'Lagi', '.suit', m)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 1000
            conn.sendBut(m.chat, `*Kamu menang!*\n\n+Rp1000\n\nKamu: ${text}\nBot    : ${astro}`, '🗿🗿', 'lagi', '.suit', m)
        } else {
            conn.sendBut(m.chat,`*Kamu kalah!*\n\nkamu: ${text}\nBot    : ${astro}`, 'wkwk mampus😂', 'Lagi', '.suit', m)
        }
}
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i

module.exports = handler
