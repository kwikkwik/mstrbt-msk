const fs = require('fs');
const Discord = require('discord.js');

exports.run = (client, message) => {

let embed = new Discord.RichEmbed()
.setAuthor(`client.user.username`, client.avatarURL)
.addField('Voice Connections', `\`\`\`${client.voiceConnections.size}\`\`\``)
message.channel.send(embed)
}
