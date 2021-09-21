/* TeenuhX
Moded by Insane boy
re edit by Shahid-devil
LUTTAPI
copy അടിക്കുമ്പോൾ പേര് മാറ്റരുത് ഒരുപാട് ദിവസത്തെ കഷ്ടപ്പാട് ആണ്
Contact us :
https://wa.me//916282185054
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*Need some Word*"
const Ln = "*▷🪐നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁* "
 const code = "*╔═════◉ 𝙻𝚄𝚃𝚃𝙰𝙿𝙸 ◉═════╗*\n           𝙻𝚞𝚝𝚝𝚊𝚙𝚒😈\n*❖═List═❖*\n\n*💠.my3            ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii         ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.yasai             ❴your text❵*\n*💠.hapoi             ❴your text❵*\n*💠.uddika        ❴your text❵*\n*💠.aah      ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.asai            ❴your text❵*\n*💠.quby1         ❴your text❵*\n*💠.quby2         ❴your text❵*\n*💠.quby3              ❴your text❵*\n*💠.quby4          ❴your text❵*\n*💠.cat1       ❴your text❵*\n*💠.cat2         ❴your text❵*\n*💠.cat3        ❴your text❵*\n*💠.cat4            ❴your text❵*\n*💠.trollikka1             ❴your text❵*\n*💠.trollikka2             ❴your text❵*\n*💠.trollikka3        ❴your text❵*\n*💠.trollikka4      ❴your text❵*\n*💠.doggy1          ❴your text❵*\n*💠.doggy2            ❴your text❵*\n*💠.doggy3         ❴your text❵*\n*💠.doggy4         ❴your text❵*\n*💠.cry              ❴your text❵*\n*💠.disaster         ❴your text❵*\n*💠.yeah            ❴your text❵*\n*💠.innocent         ❴your text❵*\n*💠.jagathy         ❴your text❵*\n*💠.amboo            ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷𝙲𝚘𝚍𝚎𝚍 𝚋𝚢: 𝚂𝚑𝚊𝚑𝚒𝚍 𝚂𝚎𝚛*"

if (Config.WORKTYPE == 'public') {
    
      Asena.addCommand({pattern: 'mmpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text, {quoted: message.data});
  
  }));

 Asena.addCommand({ pattern: 'my3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/077e4178b917d2736dd5c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'fuck ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'hii ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN}) 

    }));

Asena.addCommand({ pattern: 'sir ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'yasai ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1ec40b3da163e0a55da66.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'hapoi ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/21b92760827dc33301a79.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'uddika ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'aah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'asai ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
Asena.addCommand({ pattern: 'quby1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rIz7yEg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'quby2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rrfPeuq.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'quby3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/l7ZCF3d.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'quby4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/3ohqPtW.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'cat1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/7eDuJS9.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'cat2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/4t1sZoF.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'cat3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/olnvBj7.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'cat4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/dTQ43sU.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'trollikka1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'trollikka2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'trollikka3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/oIdcRPg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'trollikka4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/HRLF2Ri.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'doggy1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/gMOz1st.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'doggy2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/9R5jjVQ.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
Asena.addCommand({ pattern: 'doggy3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);
        
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/V0Rdfrl.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'doggy4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/6Bog4Xz.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
Asena.addCommand({ pattern: 'cry ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBE31jIXqsIQdS13c9O5HTmW1NXSNzgLVjg&usqp=CAU`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
 
Asena.addCommand({ pattern: 'disaster ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoQEefo9pAXD0vAsjf-Qln3h6Os1hH33A5g&usqp=CAU`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'yeah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e7d9e7b-2a0b-4ad3-9629-06752324a276/d9u6k0r-7c70fc35-be17-4c84-83be-fcdb8963d8bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllN2Q5ZTdiLTJhMGItNGFkMy05NjI5LTA2NzUyMzI0YTI3NlwvZDl1Nmswci03YzcwZmMzNS1iZTE3LTRjODQtODNiZS1mY2RiODk2M2Q4YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1YBw1qCghroYfgjxVmslG8zTAuPu2rzSlgfTKMiijO8`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

Asena.addCommand({ pattern: 'innocent ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQkaloSZfYPpDnfiOzGISBYT3fdSc0-6cvg&usqp=CAU`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
 
Asena.addCommand({ pattern: 'jagathy ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

       if (match[1] === '') return await message.sendMessage(need);

       var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1dEwt3ZO2NU9w0WGKZ5dv74-5glZp6piRQ&usqp=CAU`, { responseType: 'arraybuffer' })

       await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

   }));

Asena.addCommand({ pattern: 'yeah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
Asena.addCommand({ pattern: 'amboo ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKLeS-tujy1aVhH2JiyAgSlQHQRvxSM-EjQ&usqp=CAU`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

}
