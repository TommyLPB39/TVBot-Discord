const { version, EmbedBuilder } = require('discord.js')
const { ActivityType, Client, GatewayIntentBits } = require('discord.js')
const dotenv = require('dotenv')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

dotenv.config({ path: '.env' })
const token = process.env.TOKEN

client.once('ready', () => {
    console.log(`Le bot est connecté avec le compte ${client.user.tag}`)
    client.user.setStatus('dnd')
    client.user.setActivity('France 3', { type: ActivityType.Watching })
})

client.on('messageCreate', (message) => {
    if(message.content === '!info') {
        message.reply('**TV Bot** est un bot discord sur le thème de la télévision')
    }

    if(message.content === "!version") {
        message.reply(version)
    }

    if(message.content === "!help") {
        message.reply({ embeds: [helpEmbed] })
    }
})

const helpEmbed = new EmbedBuilder() 
    .setTitle('Page d\'aide')
    .setDescription('Le bot est en cours de construction')
    .setColor(0x0099FF)
    .addFields(
        {name: "Version de Node.js", value: `!version`, inline: true},
        {name: "Informations du bot", value: `!info`, inline: true}
    )
    .setFooter({ text: 'TV BOT - 2022/2025' })

client.login(token)