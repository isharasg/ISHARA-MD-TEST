const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🧣",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> *Hi My Friend*👋

     *${pushname}*

> *CREATOR*=Lakshitha Ishara〽️

> *OWNER NUMBER*=94776406272〽️

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *FULL COMMAND LIST ISHARA-MD💯*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

CREATED BY LAKSHITHA ISHARA🔰


*╭──❮ DOWNLOAD S ❯*

> 📝 .play
🧣*Download Audio from yt*
 
> 📝 .song
🧣Download song from yt
 
> 📝 .apk
🧣Download apk from playstore
 
> 📝 .video
🧣Download video from yt
 
> 📝 .fb
🧣Download  video from fb
 
> 📝 .tk
🧣Download video from tiktok
 
> 📝 .ig
🧣Download video from ig
 
> 📝 .gdrive
🧣Download drive files
 
> 📝 .wamod
🧣Download wamod apk

> 📝 .img
🧣Download image

> 📝 .xvideo
🧣Download xxx video
╰────────────⦁ 

*╭──❮ SEARCH S ❯*

> 📝 .yts
🧣Serch videos from yt
╰────────────⦁  

*╭──❮‍ MAIN S ❯*

> 📝 .alive
🧣Check online or not
  
> 📝 .ping
🧣Check bot speed
  
> 📝 .menu
🧣Nero main menu

> 📝 .menu2
🧣Nero main menu2
 
> 📝 .ai
🧣chat with ai bot

> 📝 .system
🧣check bot systems

> 📝 .owner
🧣get owner info
 
> 📝 .status
🧣check bot runtime
╰────────────⦁

*╭──❮ OTHER S ❯*

> 📝 .hirunews/news
🧣Get news result for life
 
> 📝 .wabeta
🧣Get whatsapp beta news

> 📝 .sitech
🧣Get tech news
 
> 📝 .nasa
🧣Get nasa news
╰────────────⦁

*╭──❮ GROUP S ❯*

> 📝 .mute
🧣Mute group

> 📝 .unmute
🧣Unmute group

> 📝 .left
🧣left group

> 📝 .jid
🧣group jid
╰────────────⦁

*╭──❮ OWNER S ❯*

> 📝 .update
🧣update bot velue 

> 📝 .restart 
🧣restart your bot
╰────────────⦁

*╭──❮ CONVERT S ❯*

> 📝 .sticker
🧣convert photo to sticker
╰────────────⦁



┏━━━━━━━━━━━━━━━━━━━━━━━━━━

> https//github.com/Ishara2011/ISHARA-MD

┗━━━━━━━━━━━━━━━━━━━━━━━━━━

> CREATED BY LAKSHITHA ISHARA🔰

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image{urlconfig.ALIVE_IMG},captionmadeMenu},{quotedmek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
