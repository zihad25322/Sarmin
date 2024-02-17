const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}

module.exports.config = {
  name: "গান", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
		"ytdl-core":"",
    "simple-youtube-api":""
	}
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/1.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('আপনার গানটি সেন্ড করতে ব্যার্থ,কারণ ফাইলটি ২৫ এমবি এর উর্ধ্বে;', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
		body: `🎵 গানের নাম: ${data.title}\n🎶 ইউটিউব চ্যানেল : ${data.author}\n⏱️ সময়: ${this.convertHMS(data.dur)}\n👀 ভিউ: ${data.viewCount}\n👍 লাইক: ${data.likes}\n⏱️প্রক্রিয়াকরণের সময়: ${Math.floor((Date.now()- data.timestart)/1000)} second\n💿====CYBER_X_MAHABUB====💿`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage('» উফফ আবাল কি গান শুনতে চাস তার ২/১ লাইন তো লেখবি নাকি 🥵 empty!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/1.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('আপনার গানটি সেন্ড করতে ব্যার্থ,কারণ ফাইলটি ২৫ এমবি এর উর্ধ্বে;', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `🎵 গানের নাম: ${data.title}\n🎶 ইউটিউব চ্যানেল: ${data.author}\n⏱️ সময়: ${this.convertHMS(data.dur)}\n👀 ভিউ: ${data.viewCount}\n👍 লাইক: ${data.likes}\n⏱️ প্রক্রিয়াকরণের সময়: ${Math.floor((Date.now()- data.timestart)/1000)} second\n💿====CYBER_X_MAHABUB====💿`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} - ${value.title} (${value.length.simpleText})\n\n`);
            }
            var body = `»🔎 এইযে ${link.length} অনুযায়ী আপনার অনুসন্ধানের রেজাল্ট:\n\n${msg}» রিপ্লাই করুন (feedback) এখন আপনি যেই গানটি শুনতে চান.!(অবশ্যই ইংরেজি তে 1-10 এর মধ্যে রিপ্লাই করতে হবে)`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('দুঃখিত,দয়া করে কিছুক্ষণ পরে আবার চেষ্টা করুন!!\n' + e, event.threadID, event.messageID);
        }
    }
                                                                                                                                                                                                       }
