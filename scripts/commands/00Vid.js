const fs = require("fs");
module.exports.config = {
	name: "😓",
    version: "1.0.1",
	Permssion: 0,
 prefix: true,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	Category: "no prefix",
	usages: "😓",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sad")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😓")==0) {
		var msg = {
				body: "-আলোর খোঁজ করতে গিয়ে- অন্ধকারে হারিয়ে গেছি আমি 😅💔..-!! 🙂 \nミM　Á　H　Â　B　Ü　 Rミ",
				attachment: fs.createReadStream(__dirname + `/noprefix/dk.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
		}
	}
	module.exports😞.run = function({ api, event, client, __GLOBAL }) {

}
