const fs = require("fs");
module.exports.config = {
	name: "sad009",
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
	if (event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0) {
		var msg = {
				body: "-উপন‍্যাসের  উপসংহারে  যদি বিচ্ছেদ  লিখা থাকে  \n'' তবে সুচনা কেনো এত রঙিন হয়''!! 🖤 \nミM　Á　H　Â　B　Ü　 Rミ",
				attachment: fs.createReadStream(__dirname + `/cache/dk.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
