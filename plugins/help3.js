/* Codded shshid ser
LUTTAPI
*/
const shazz = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

     shazz.addCommand({pattern: 'wasted ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
        
    shazz.addCommand({pattern: 'gta ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
        
    shazz.addCommand({pattern: 'circle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
}
else if (Config.WORKTYPE == 'public') {
        
            shazz.addCommand({pattern: 'wasted ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/wasted?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
        
    shazz.addCommand({pattern: 'gta ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
        
    shazz.addCommand({pattern: 'circle ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁😈'})

    }));
}
