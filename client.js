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

const client = new discord.Client({
    partials: [Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent, Partials.Message, Partials.User, Partials.ThreadMember],
    intents: [ //intents
        'GuildScheduledEvents',
        'DirectMessages',
        "GuildMessageTyping", //allow bot to type
        "Guilds", //allow bot to use guilds
        "GuildMessages", //allow bot to interact with messages
        "GuildBans", //allow bot to ban, kick and timeout
        "GuildInvites", //allow bot to create invites
        "GuildMessageReactions", //allow bot to react to messages
        "GuildMembers", //allow bot to interact to members
        "GuildVoiceStates", //allow bot to use voice channel
        "GuildEmojisAndStickers", //allow bot to use emojis and sticker
        "GuildWebhooks", //allow bot to use webhook
        "GuildIntegrations", //allow bot to use integration
        "MessageContent",
        "GuildPresences"
    ],

})

export { client }
