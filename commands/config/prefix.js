  
const Discord = require('discord.js');

const db = require('wio.db')

module.exports = {
    config: {
        name: 'setprefix',
        description: 'change the prefix',
        aliases: ["prefix"],
        usage: 'prefix <newprefix>',
        accessableby: "ADMINISTRATOR",
    },
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You Don't Have Enough Permission To Execute This Command - Manage Server");
    const { prefix } = require('../../config.js')
    let Prefix = await db.fetch(`Prefix_${message.guild.id}`);
    if (!Prefix) Prefix = prefix;
    
    const NewPrefix = args.join(" ");
    
    if (!NewPrefix) return message.channel.send("Please Give New Prefix Of Bot!");
    
    if (NewPrefix.length > 10) return message.channel.send("Too Long Prefix - 10 Limit");
    
    if (NewPrefix === Prefix) return message.channel.send("Given Prefix Is The Current Prefix!");
    
    const Embed = new Discord.MessageEmbed()
    .setColor(Color || "RANDOM")
    .setTitle("Sucess")
    .setDescription(`New Prefix Has Been Setted - ${NewPrefix}`)
    .setFooter(`Setted By ${message.author.username}`)
    .setTimestamp();
    
    await db.set(`Prefix_${message.guild.id}`, NewPrefix);
    
    try {
      return message.channel.send(Embed);
    } catch (error) {
      return message.channel.send(`New Prefix Has Been Set - ${NewPrefix}`);
    };
    }
}

