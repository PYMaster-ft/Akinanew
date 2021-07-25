/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "Yardım menüsünden botu kullanım hakkında bilgi verir."
const h_DedEN = "Gives information about using the bot from the Help menu."
const matchnullEN = "========== *🆘 General Help 🆘* ==========\n\n🔹 *.alive:* bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.\n\n🔹 *.akina:* සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.\n🔹 *.setvar:* It settings config without entering Heroku.\n\n🔸 වැඩි විස්තර සඳහා, විධානය භාවිතා කරන්න ```.help <ඔබට උදව් අවශ්‍ය මාතෘකාව>```\nExample: ```.help how can ı turn to public my bot?```\n\n========== *End General Help* =========="
const matchnull = "========== *🆘 Genel Yardım 🆘* ==========\n\n🔹 *.alive:* Botun çalışıp çalışmadığını kontrol eder.\n🔹 *.asena:* Tüm komut listesini gösterir.\n🔹 *.setvar:* Herokuya girmeden config ayarlar.\n\n🔸 Daha fazla yardım için ```.help <yardım almak istediğiniz konu>``` komutunu kullanın.\nÖrnek: ```.help botumu nasıl public yaparım?```\n\n========== *Genel Yardım Bitti* =========="
const notfound = "```Almak istediğiniz yardım bulunamadı!```\n```Lütfen daha açıklayıcı bir şekilde sorunu belirtin.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"

// ==================== ALL DESCRİPTİONS ====================
const pubTR = "Botunuzu public yapmak komutları herkese açık yapacaktır. Public yapıldıktan sonra kullanıcı sadece kişisel ve admin komutlarını kullanabilir hale gelir. Onun dışında komutları kullanamaz.\nBotunuzu public yapmak için *.setvar WORK_TYPE:public* komutunu kullanın."
const pubEN = "ඔබේ bot පොදු කිරීමෙන් විධාන පොදු වේ. එය ප්‍රසිද්ධ කළ පසු, පරිශීලකයින්ට භාවිතා කළ හැක්කේ පුද්ගලික සහ පරිපාලක විධාන පමණි. පරිශීලකයාට මෙය හැර වෙනත් විධානයන් භාවිතා කළ නොහැක.\n ඔබේ බොට් ප්‍රසිද්ධ කිරීමට, ටයිප් කරන්න *.setvar WORK_TYPE:public*"
const blTR = "BlockChat botunu belirlediğiniz gruba, kişiye veya birden fazla sohbete kapatır.\nKullanmak için önce sohbete gidip *.jid* yazın. Daha sonra gelen *90xxx-xxx@g.us veya 90xxx@whatsapp.net* yazısını kopyalayın. (@g.us ve @whatsapp.net'i silin!)\nArdından *.setvar BLOCK_CHAT:id && id1,id2...* komutunu kullanın."
const sudoTR = "SUDO, botunuzu seçtiğiniz kullanıcıya tüm yetkileri ile paylaşır. Numara sonuna ,0 koyarsanız gruplarda da aktif hale gelir.\nKullanmak için *.setvar SUDO:90xxxx && 90xx,90xxx [ülke kodu ile, (❌ +90xx • ✅ 90xx)]"

const privTR = "Botunuzu private yapmak komutları sadece size özel yapar. Başkaları kullanamaz.\nBotunuzu private yapmak için *.setvar WORK_TYPE:private* komutunu kullanın."
const privEN = "ඔබේ බොට් පුද්ගලික කිරීම මඟින් විධාන පුද්ගලික වේ. කිසිවෙකුට භාවිතා කළ නොහැක.\nඔබේ බොට් පුද්ගලික කිරීමට, ටයිප් කරන්න *.setvar WORK_TYPE:private*"
const blEN = "ඔබ සඳහන් කරන කණ්ඩායම්, පුද්ගල හෝ බහු කතාබස් වලට බ්ලොක්චැට් බොට් වසා දමයි.\n එය භාවිතා කිරීමට, පළමුව චැට් වෙත ගොස් ටයිප් කරන්න *.jid* ඉන්පසු එන කේතයට copy කරන්න. (Except @g.us or @whatsapp.net!)\nඉන්පසු මෙම විධානය භාවිතා කරන්න *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoEN = "SUDO, ඔබේ බොට් එක ඔබ තෝරාගත් පරිශීලකයාට එහි සියලු බලයන් සමඟ බෙදා ගනී. ඔබ අංක 0 අවසානයේ තැබුවහොත්, පරිශීලකයාට එය සමූහය තුළද භාවිතා කළ හැකිය.\nභාවිතා කිරීමට, ටයිප් කරන්න *.setvar SUDO:94xxxx && 94xx,94xxx [with county code, (❌ +94xx • ✅ 94xx)]*"

if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
    
    Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnull,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('belirli') && match[1].includes('sohbet')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoTR,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfound,
                MessageType.text
            );
        }
    }));
}
else {
    
    Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_DedEN}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('how')) || (match[1].includes('public') && match[1].includes('set')) || (match[1].includes('public') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('how')) || (match[1].includes('private') && match[1].includes('set')) || (match[1].includes('private') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('usage')) || (match[1].includes('SUDO') && match[1].includes('what')) || (match[1].includes('how') && match[1].includes('SUDO')) || (match[1].includes('set') && match[1].includes('SUDO')) || (match[1].includes('share') && match[1].includes('bot')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('how') && match[1].includes('block')) || (match[1].includes('close') && match[1].includes('bot')) || (match[1].includes('specific') && match[1].includes('chat')) || (match[1].includes('specific') && match[1].includes('set')) ) {
            return await message.client.sendMessage(
                message.jid,
                blEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}
