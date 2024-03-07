const fs = require("fs");
module.exports.config = {
  name: "prem kori",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }{
		var msg = {
				body: "yes","বস মাহাবুব কে চোখে দেখো না 😒😑..যাও ওনার ইনবক্সে 👀🤭 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
