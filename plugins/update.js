let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
  conn.sendMessage(m.chat, {
        react: {
          text: `⚠️`,
          key: m.key,
        }})
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/Paquito1923/ebotgw.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    m.reply(wait)
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^(upd(a|e)te|uo?p?|uoda?e?te?)$/i 
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
