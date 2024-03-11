module.exports = {
config: {
  name: "album",
  version: "1.0.2",
  permission: 0,
  prefix: true,
  credits: "Imran",
  description: "",
  category: "admin",
  usages: "",
    cooldowns: 5,
}
};
module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n𝟙.╰┈➤ 𝐀𝐋𝐎𝐍 𝐕𝐈𝐃𝐄𝐎💔 \n𝟚.╰┈➤ 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎😻 \n𝟛.╰┈➤ 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎🥰 \n𝟜 ╰┈➤ 𝐂𝐑𝐔𝐒𝐇 𝐕𝐈𝐃𝐄𝐎😍 \n𝟝.╰┈➤ 𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐕𝐈𝐃𝐄𝐎🕋 \n𝟞.╰┈➤ 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎😔 \n𝟟.╰┈➤ 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎💝 \n𝟠.╰┈➤ 𝐍𝐀𝐓𝐔𝐑𝐀𝐋 𝐕𝐈𝐃𝐄𝐎🌿🕊️\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟡.╰┈➤ 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎🔥 \n𝟙𝟘.╰┈➤ 𝐇𝐎𝐓 𝐕𝐈𝐃𝐄𝐎🥵 \n𝟙𝟙.╰┈➤𝐈𝐓𝐄𝐌 𝐕𝐈𝐃𝐄𝐎🔞\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const cap = (await p.get(h)).data.imran;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `${cap}`,
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://alon-imran.onrender.com/status";
        else if ("2" == a.body)
         var   h = "https://imran-api.onrender.com/video/anime";
        else if ("3" == a.body)
         var   h = "https://imran-api.onrender.com/video/baby";
        else if ("4" == a.body)
          var  h = "https://imran-api.onrender.com/video/crush";
        else if ("5" == a.body)
          var  h = "https://imran-api.onrender.com/video/islam";
        else if ("6" == a.body)
         var  h = "https://imran-api.onrender.com/video/sad";
         else if ("7" == a.body)
         var  h = "https://imran-api.onrender.com/video/love";
        else if ("8" == a.body)
         var  h = "https://netural-imran.onrender.com/status";
          else if ("9" == a.body)
         var  h = "https://imran-api.onrender.com/video/horny";
         else if ("10" == a.body)
         var  h = "https://imran-api.onrender.com/video/hot";
          else if ("11" == a.body)
         var  h = "https://imran-api.onrender.com/video/item";
        return { p, h };
    }
}
