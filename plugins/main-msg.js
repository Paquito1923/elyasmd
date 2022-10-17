//Buat BACKUP dari om Paquito
import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys'

const id = 'abcd@s.whatsapp.net' // the WhatsApp ID 
// send a simple text!
const sentMsg  = await conn.sendMessage(id, { text: 'oh hello there' })
// send a reply messagge
const sentMsg  = await conn.sendMessage(id, { text: 'oh hello there' }, { quoted: message })
// send a mentions message
const sentMsg  = await conn.sendMessage(id, { text: '@12345678901', mentions: ['12345678901@s.whatsapp.net'] })
// send a location!
const sentMsg  = await conn.sendMessage(
    id, 
    { location: { degreesLatitude: 24.121231, degreesLongitude: 55.1121221 } }
)
// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Jeff Singh\n' // full name
            + 'ORG:Ashoka Uni;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg  = await conn.sendMessage(
    id,
    { 
        contacts: { 
            displayName: 'Jeff', 
            contacts: [{ vcard }] 
        }
    }
)

// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await conn.sendMessage(id, buttonMessage)

//send a template message!
const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}

const sendMsg = await conn.sendMessage(id, templateMessage)

// send a list message!
const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    },
]

const listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

const sendMsg = await conn.sendMessage(id, listMessage)

const reactionMessage = {
    react: {
        text: "💖", // use an empty string to remove the reaction
        key: message.key
    }
}

const sendMsg = await conn.sendMessage(id, reactionMessage)
/*
 * Hyzer Baik :) 
 * Wkwkk Ini Cuman Buat Pelengkap Doang
 * Bukan Bagian Dari Fitur Deck
 * Sumimasen >,<
*/

//----------[ FAKE TOKO ]--------//
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/siang.jpg') //Gambarnye
					},
					"title": "MikeBot", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//----------[ FAKE TROLI ]--------//
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'MikeBot', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./media/siang.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//----------[ FAKE LOKASI ]--------//
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Russia',
                    jpegThumbnail: fs.readFileSync('./media/siang.jpg')
                          }
                        }
                      }
                      
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"jakarta","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	const fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	
	const fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	const bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
	
//----------[ FAKE DOC ]--------//
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Halo bang', 
                    jpegThumbnail: fs.readFileSync('./media/siang.jpg')
                          }
                        }
                      }
//----------[ FAKE VIDEO ]--------//
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
                       }
	                  }
//----------[ FAKE GC ]--------//
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
		}
	}
}
//----------[ FAKE GIF  ]--------//
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
                       }
	                  } 
//----------[ FAKE TEXT  ]--------//
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
	                  } 
                     }
//----------[ FAKE VN  ]--------//
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
