let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
module.exports = {
  before(m, { isAdmin, isBotAdmin, isUser }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink) {
      m.reply('*ANTILINK GRUB*\n\nkarena sudah mengirim link grub kamu bakal di kick')
      if (global.opts['restrict']) {
        if (isUser) return true
        ,this.groupRemove(m.chat, [m.sender])
      }
    }
    return true
  }
}
