import {
    ChatGPTAPI
} from 'chatgpt'
import env from 'dotenv'
import discord, {
    GuildMember,
    Presence,
    Partials,
    ChatInputCommandInteraction,
    PermissionsBitField,
    SlashCommandBuilder,
    MessageMentions,
    GatewayIntentBits,
    Message,
    Role,
    CommandInteraction,
    CategoryChannel,
    ChannelType,
    VoiceChannel,
    VoiceStateManager,
    EmbedBuilder,
    RoleManager,
    Client,
    BaseInteraction,
    InteractionType,
    VoiceState,
    ClientVoiceManager,
    BaseGuildVoiceChannel,
    ChannelManager,
    GuildChannel,
    GuildChannelManager,
    ThreadChannel,
    ChannelFlags,
    ClientApplication,
    ClientUser,
    Guild,
    Emoji,
    GuildEmoji,
    GuildEmojiManager,
    User,
    UserFlags,
    UserManager,
    UserContextMenuCommandInteraction,
    ReactionUserManager,
    WebhookClient,
    Webhook,
    ButtonBuilder,
    ActionRowBuilder,
    ApplicationCommand,
    ApplicationCommandManager,
    GuildApplicationCommandManager,
    ApplicationCommandPermissionsManager,
    AttachmentBuilder,
    BaseGuildTextChannel,
    GuildEmojiRoleManager,
    GuildMemberManager,
    GuildMemberRoleManager,
    TextChannel,
    Collector,
    Collection,
    ActivityType
} from 'discord.js'
import {
    client
} from './client.js'
import fs from 'fs';
import path from 'path';
const {
    join
} = path
import {
    Routes,
    PermissionFlagsBits
} from 'discord-api-types/v9'
import {
    REST
} from "@discordjs/rest"

env.config();

client.on('ready', () => {
    console.log(`bot is online`)
})

const ask = new discord.SlashCommandBuilder()
    .setName('ask-gpt')
    .setDescription(`ask chatGPT`)
    .addStringOption(option =>
        option.setName(`question`)
            .setDescription(`the question you want to ask chatGPT`)
            .setRequired(true))
            

const command = []
command.push(ask)


    try {
        console.log(`test`)
        // The put method is used to fully refresh all commands in the guild with the current set
        const rest = new REST({
            version: '10'
        }).setToken(process.env.TOKEN2);
        const data = rest.put(
            Routes.applicationGuildCommands(`1085467843916742666`, '841272656192208916'), {
                body: command
            },
        ).catch(console.error);
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error();
    }

client.on(`interactionCreate`, (interaction) => {
    if (interaction.commandName == `ask-gpt` && interaction.isChatInputCommand() && interaction.client) {
        interaction.reply(`chatGPT is thinking...`)
        const question = interaction.options.getString(`question`, true)
        async function chat(question) {
            const api = new ChatGPTAPI({
                apiKey: process.env.TOKEN
            })

            const res = await api.sendMessage(question)
            let answer = res.text
            answer = (!answer) ? `couldn't reach chatGPT for an answer` : answer
            const embed = new discord.EmbedBuilder()
                .setColor("#13ff13")
                .setTitle(`${question}`)
                .setDescription(`${answer}`)
            interaction.editReply({content: ``,
                embeds: [embed]
            })
            console.log(res.text)
        }
        chat(question)
    }
})

client.login(process.env.TOKEN2)