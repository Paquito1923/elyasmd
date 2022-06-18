let handler = async (m, { conn, text }) => {
  let [atas, bawah] = text.split`|`
if (!text) throw `*CONTOH PENGGUNAAN:*

.drake elyas burik|elyas ganteng`
if (!bawah) throw `*CONTOH PENGGUNAAN:*

.drake elyas burik|elyas ganteng
(anda belum memasukkan teks ke 2)`
await m.reply("*_TUNGGU SEBENTAR..._*")
  await conn.sendFile(m.chat, `https://api.popcat.xyz/drake?text1=${atas}&text2=${bawah}`, 'file.jpg', 'Nih', m)
}
handler.help = ['dreake <teks atas>|<teks bwh>']
handler.tags = ['maker']
handler.command = /^drake$/i

handler.limit = true

module.exports = handler