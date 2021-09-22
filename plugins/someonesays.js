/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Shazz = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'public') {
  
    Shazz.addCommand({pattern: 'mmpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(

  

      message.jid,code, MessageType.text, {quoted: message.data});

  

  }));
