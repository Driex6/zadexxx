const discord = require('discord.js')

module.exports = {
    name: "pds",
    description: "Prendre son service",
    permission: "Aucune" ,
    dm: false,

    async run (client, message, args) {

        let Embed = new discord.EmbedBuilder()
            .setColor("#00FF00")
            .setTitle("PRISE DE SERVICE")
            .setDescription("**Gestionnaire de services**")
            .setTimestamp()

            .addFields({ name: ':information_source: : Informations', value: `<@${message.user.id}> vient de prendre son service !` })
            .addFields({ name: ':clock2: : Date', value: `<t:${Math.floor(parseInt(Date.now()) /1000)}:F> ` })

            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL({ ephemeral: true})})

        await message.channel.send({embeds: [Embed], ephemeral: true})

    }
}