let handler = async (m, { text }) => {
m.reply(text)
}
handler.help = ['say', 'katakan']
handler.tags = ['info']
handler.command = /^(say|katakan)$/i

module.exports = handler
