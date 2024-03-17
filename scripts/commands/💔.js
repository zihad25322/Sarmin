const fs = require("fs");
module.exports.config = {
	name: "sad026",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💔")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("💔")==0) {
		var msg = {
				body: "-বিজ্ঞান তুমি এখনো ব্যর্থ কারণ😌🖤...\nতুমি তৈরি করতে পারোনি স্মৃতি ভোলার যন্ত্র🙂💔🥺 \nミM　Á　H　Â　B　Ü　 Rミ",
				attachment: fs.createReadStream(__dirname + `/cache/received_1055260255533365.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
