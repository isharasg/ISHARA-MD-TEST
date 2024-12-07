const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🗒️",

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

> 🔖 .play

> 🔖 .song

> 🔖 .apk
 
> 🔖 .video

> 🔖 .fb
 
> 🔖 .tk
 
> 🔖 .ig

> 🔖 .gdrive

> 🔖.img

────────⦁ 

*╭──❮ SEARCH S ❯*

> 🔖 .yts

──────────⦁  

*╭──❮‍ MAIN S ❯*

> 🔖 .alive
  
> 🔖 .ping
  
> 🔖 .menu
 
> 🔖 .ai

> 🔖 .system

> 🔖 .owner
 
> 🔖 .status

───────⦁

*╭──❮ GROUP S ❯*

> 🔖 .mute

*╭──❮ OWNER S ❯*

> 🔖 .update

> 🔖 .restart 

──────⦁

*╭──❮ CONVERT S ❯*

> 🔖 .sticker

╰────────────⦁



┏━━━━━━━━━━━━━━━━━━━━━━━━━━

*https://github.com/Lakshitha-Ishara/ISHARA-MD*

┗━━━━━━━━━━━━━━━━━━━━━━━━━━

> CREATED BY LAKSHITHA ISHARA🔰

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
