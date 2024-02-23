const fs = require("fs");
module.exports.config = {
	name: "salam",
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
	let react = event.body.toLowerCase();
	if(react.includes("আসসালামুয়ালাইকুম") || react.includes("assalamualaikum") || react.includes("Assalamualaikum")) {
		var msg = {
				body: "ওয়ালাইকুমসালাম.. আপনার উপর শান্তি বর্ষিত হোক-!!🤍"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
