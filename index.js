const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 🗺️ البيانات
const buildsData = [
  { keywords: ["فاديا", "موارد"], name: "موارد فاديا", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743602860916927/IMG_20260509_214604_469.jpg" },
  { keywords: ["فاديا", "بيلد"], name: "بيلد فاديا", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502741875050811392/IMG_20260509_213817_312.jpg" },
  { keywords: ["نانالي", "موارد"], name: "موارد نانالي", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743604307693628/IMG_20260509_214523_758.jpg" },
  { keywords: ["نانالي", "بيلد"], name: "بيلد نانالي", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743124018069586/IMG_20260509_214352_663.jpg" },
  { keywords: ["دافوديل", "موارد"], name: "موارد dافوديل", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743602386698351/IMG_20260509_214604_760.jpg" },
  { keywords: ["دافوديل", "بيلد"], name: "بيلد dافوديل", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502742816634179745/IMG_20260509_214254_275.jpg" },
  { keywords: ["باي", "كانغ", "موارد"], name: "موارد باي كانغ", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743603955630121/IMG_20260509_214604_088.jpg" },
  { keywords: ["باي", "كانغ", "بيلد"], name: "بيلد باي كانغ", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502742591463227432/IMG_20260509_214210_686.jpg" },
  { keywords: ["هوتوري", "موارد"], name: "موارد هوتوري", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743820226396341/IMG_20260509_214523_941.jpg" },
  { keywords: ["لاكريموسا", "موارد"], name: "موارد لاكريموسا", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743600939794534/IMG_20260509_214604_130.jpg" },
  { keywords: ["ساكيري", "موارد"], name: "موارد ساكيري", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743603586400416/IMG_20260509_214603_894.jpg" },
  { keywords: ["زيرو", "موارد"], name: "موارد زيرو", image: "https://cdn.discordapp.com/attachments/1502741222694060226/1502743602047094824/IMG_20260509_214604_786.jpg" }
];

client.on("ready", () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content.trim();

  const found = buildsData.find(item => 
    item.keywords.every(kw => content.includes(kw))
  );

  if (found) {
    const embed = new EmbedBuilder()
      .setTitle(found.name)
      .setImage(found.image)
      .setColor("Blue");

    message.channel.send({ embeds: [embed] });
  }
});

// ✅ التعديل هنا: تم حذف علامات التنصيص ليعمل المتغير بشكل صحيح
client.login(process.env.TOKEN);