let f = {
  key: {
    remoteJid: '687998291@s.whatsapp.net',
    fromMe: true,
    id: 'BAE51740BC6E15D2'
  },
  message: {
    stickerMessage: {
      url: 'https://mmg.whatsapp.net/d/f/AiCjoOOOxv4kB6cv_Lu3S5GuASs_2rEoYIyF3dglpeQ5.enc',
      fileSha256: 'SiAN/OxA+nU80DNxi7uNvdQrRsoYrslLPSYs0gRNjEw=',
      fileEncSha256: 'Xy7g73UI9v9oieRiDdoa3r6FumE/ZweOgz3//irjNSA=',
      mediaKey: '7VSTYwIeP0TwueNouFvKllQVA7zk/BpG9V1vJP1AwIk=',
      mimetype: 'image/webp',
      directPath: '/v/t62.7118-24/55664122_1020246558667866_111487360427061942_n.enc?ccb=11-4&oh=01_AVxehI9PMr68mdclLqlRR3rOl_YOIjXa0YIg0jZvH76XHA&oe=6340E3C0',
      fileLength: '666000',
      mediaKeyTimestamp: '1662646006',
      isAnimated: false
    }
  }
}
let handler = async(m, {conn}) => {
await conn.copyNForward(m.chat, f, true)
}
handler.command = ["stikerlag"]
module.exports = handler
