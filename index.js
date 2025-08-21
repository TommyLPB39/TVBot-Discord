const { MessageActionRow, MessageButton, ActionRowBuilder, ContainerBuilder, TextDisplayBuilder, SeparatorBuilder, SeparatorSpacingSize, MessageFlags, ButtonStyle, SectionBuilder, Colors } = require('discord.js')
const { Message } = require('discord.js')
const { version, EmbedBuilder, ButtonBuilder } = require('discord.js')
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
// Commandes d'information sur le bot

    if(message.content === ';info') {
        message.reply('**TV Bot** est un bot discord sur le thème de la télévision')
    }

    if(message.content === ";bot-info") {
        message.reply(`Je m'occupe actuellement de ${message.guild.memberCount} personnes.`, {components: [inviteButton]})
    }

// Commande de liste de chaînes

    if(message.content === ";channel-list") {
        
        const channel1 = new TextDisplayBuilder()
            .setContent("TF1 (Canal 1 de la TNT)")

        const channel1Value = new TextDisplayBuilder()
            .setContent("-# Premiere chaine de Télévision en France")

        const channel2 = new TextDisplayBuilder()
            .setContent("France 2 (Canal 2 de la TNT")

        const channel2Value = new TextDisplayBuilder()
            .setContent("-# Chaine de Télévision appartenant au service public")

        const channel3 = new TextDisplayBuilder()
            .setContent("France 3 (Canal 3 de la TNT")
    
        const channel3Value = new TextDisplayBuilder()
            .setContent("-# Seconde chaine de Télévision appartenant au service public")

        const channel4 = new TextDisplayBuilder()
            .setContent("France 4 (Canal 4 de la TNT")

        const channel4Value = new TextDisplayBuilder()
            .setContent("-# Troisième chaine de Télévision appartenant au service public")

        const channel5 = new TextDisplayBuilder()
            .setContent("France 5 (Canal 5 de la TNT)")

        const channel5Value = new TextDisplayBuilder()
            .setContent("-# Quatrième chaine de Télévision appartenant au service public")

        const button = new ButtonBuilder()
            .setLabel('Clique moi')
            .setStyle(ButtonStyle.Link)
            .setURL('https://www.arcom.fr/television-et-video-la-demande/les-chaines-de-la-tnt')

        const element = new ContainerBuilder()
        .setAccentColor(Colors.Blue)
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent('# Liste des chaines de télévision de France')
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent('**Voici la liste de toutes les chaînes de la télévision dans la TNT française**')
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
            )
            .addTextDisplayComponents(channel1, channel1Value, channel2, channel2Value, channel3, channel3Value, channel4, channel4Value, channel5, channel5Value)

            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
            )

            .addSectionComponents(
                new SectionBuilder()
                    .addTextDisplayComponents(
                        new TextDisplayBuilder()
                            .setContent("Pour plus d'informations, veuillez cliquer sur le bouton")
                    )
                    .setButtonAccessory(button)
            )

        message.channel.send({ flags: MessageFlags.IsComponentsV2, components: [element]})
    }


// Commande d'aide

    if(message.content === ";help") {
        const textTitle = new TextDisplayBuilder()
            .setContent("# Liste des commandes du bot")

        const description = new TextDisplayBuilder()
            .setContent("Ici, retrouvez la liste de toutes les commandes du bots")

        const command1 = new TextDisplayBuilder()
            .setContent("**;channel-list**")

        const command0 = new TextDisplayBuilder()
            .setContent("**;help**")

        const command0value = new TextDisplayBuilder()
            .setContent("-# Permet d'obtenir la liste de toutes les commandes du bot **(Vous êtes ici)**")

        const command1value = new TextDisplayBuilder()
            .setContent("-# Permet d'obtenir la liste des chaînes de la TNT Française")

        const command2 = new TextDisplayBuilder()
            .setContent("**;bot-info**")

        const command2value = new TextDisplayBuilder()
            .setContent("-# Permet d'obtenir des informations sur le bot")

        const command3 = new TextDisplayBuilder()
            .setContent("**;channel-info**")

        const command3value = new TextDisplayBuilder()
            .setContent("-# Commande en développement")

        const command4 = new TextDisplayBuilder()
            .setContent("**;opensource**")

        const command4value = new TextDisplayBuilder()
            .setContent("-# Mon code est sur Github")

        const element = new ContainerBuilder()
            .addTextDisplayComponents(textTitle, description)

            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
            )

            .addTextDisplayComponents(command0, command0value, command1, command1value, command2, command2value, command3, command3value)

            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
            )

            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent("**-# TV BOT - 2022/2025 - Appartient à +2Télé**")
            )
            

        message.channel.send({ flags: MessageFlags.IsComponentsV2, components: [element] })
    }

// Commandes d'info de chaînes 

    if(message.content === ";channel-info"){
        const element = new ContainerBuilder()
        .setAccentColor(Colors.Aqua)
        .addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent("# Informations sur les chaînes tv"),
            new TextDisplayBuilder()
                .setContent("**Grâce à la commande** `;channel-info`, obtenez certaines informations sur certaines chaînes TV")
        )

        .addSeparatorComponents(
            new SeparatorBuilder()
                .setSpacing(SeparatorSpacingSize.Large)
        )

        .addTextDisplayComponents(
            new TextDisplayBuilder()
                .setContent("**Syntaxe :**"),
            new TextDisplayBuilder()
                .setContent("`;channel-info <Nom de la chaîne>`")
        )

        message.channel.send({ flags: MessageFlags.IsComponentsV2, components: [element] })
    }

    if(message.content === ";channel-info tf1") {
    
        const element2 = new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent("## Cette commande est en cours de développement, veuillez réessayer plus tard")
            )
        
        message.channel.send({ flags: MessageFlags.IsComponentsV2, components: [element2]})
    }

// Commande d'information opensource

    if(message.content === ";opensource") {
        const element = new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent("Je suis opensource")
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder()
                    .setContent("Si tu souhaites m'utiliser personnellement, me modifier, ou suggérer des modifications à mon égard, n'hésite pas à visiter mon [code source](https://github.com/TommyLPB39/TVBot-Discord)")
            )
    }

// Si quelqu'un utilise les interactions

client.on('interactionCreate', (interaction) => {
    if(interaction) {
        interaction.reply("Les interactions ne sont pas prise en charge pour le moment. Veuillez réessayer plus tard.")
    }
})

const inviteButton = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setStyle('5')
        .setLabel('M\'inviter')
        .setURL('https://test.com')
    )

})

client.login(token)
