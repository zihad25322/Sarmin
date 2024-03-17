const fs = require("fs");
module.exports.config = {
	name: "🤭",
    version: "1.0.1",
	permssion: 0,
  prefix: true,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	category: "no prefix",
	usages: "🤭",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙊")==0 || 
event.body.indexOf("🙈")==0 || 
event.body.indexOf("🫣")==0 ||    
event.body.indexOf("🫢")==0 ||  event.body.indexOf("🤭")==0) {
		var msg = {
				body: "এঁতঁ সঁরঁমঁ পাঁইঁয়োঁ নাঁ শুঁনাঁ😚🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/sorom.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
