module.exports.config = {
  name: "bing", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['7HDmwSFQfttl6QIPa8VLISDViqpv8mXH65s_ADCzqN4gILX97evLlgQWNIicT0sOR7KdAumZpMolP4w_x8TmqAuyB3YTi4SMWMN3Kv0Z7QoU2omnUbnTbBCkkVg0y7gBNU41hhaG_liNRU2FxBLJXZ1eEIwKH4o5ZVSxpc1A1jFU4Y_FEopW6vaEI4ehPSfngMj4NYzqyJ7Gtb_xGw9ug','1o-0Pc00DPMoLU0aH2lBVnY1CcRA24kq6L3SSjJecXHHy-H5ZWYqiLkBO69Ml-p1lmv5SVkOnsj6O3N-u7vL-1qDzpDVP9cpluZ5KO2wCBYhKMcjqJ_461vhJas2M6e41bu8XPu05q8lyqBzXBYT_2Mxuqv-isfBAasVrIO0BGXgW4PRkymiuqgqJov588usI9GIn0jkLbAp90UKuhTcZ4A','1o-0Pc00DPMoLU0aH2lBVnY1CcRA24kq6L3SSjJecXHHy-H5ZWYqiLkBO69Ml-p1lmv5SVkOnsj6O3N-u7vL-1qDzpDVP9cpluZ5KO2wCBYhKMcjqJ_461vhJas2M6e41bu8XPu05q8lyqBzXBYT_2Mxuqv-isfBAasVrIO0BGXgW4PRkymiuqgqJov588usI9GIn0jkLbAp90UKuhTcZ4A','1HBWKlkzbUOsyo9S0iqPsEYqyCdjrwMBv_t3ThvHJ_n9sLcA93VDOErVDvrCZ_SgghYnf1vMGklYdlVCc9GJinoKGQ_kL5Y8nklDrJwQ7rEyDSL63CzbBT3mbPSqttKIxJUtHWb5w5dc7rzS6vE1Xtn7MOECj5eXZuTvJKyCjk5oQew3PuwpiJ8Pw9HhYY7UsNjpBRJbebLMw5ZJxXqbNqkvTN1iPL5drN7Q-O2QVYQY','1Lw0KDMeHKdPjsaZo-tcyDXAn9S6cYcJzr9VcAY-OJ5HVwEWSaXP-lzOMInzPRG-aTCyK3uKervxBziWN-LpI6sp3Lp5Br5_qtr4J2jE9Duh9ni9uOm75a6VfhELV4LrTPKGGDdgqvZc2CQlotwsi9VeHW2Vr8ONW6lLKRC-TsdNCF8rZhnz2_w9Odb-PJOce7JR8seuf6vmR8Vs9wS3bo2LBe8Sx7flZ-uVSG1-k3pU','1KsbmJ7sQa3wJ8zQwq0dmsOpguuQ4KooMMB7lnz8mMi2wct1-UpSCVv5qItTwj87CmVPDz1VHT0oOWEux1vJJPL8Apy2hCOu5xXQCboDo-iQCfHrsbgEY81_VKU0HDk0bgtPn5SWU4y83IiIaxD1jjpw-hT2uBy2PIWbxjuUiH51ID7kts6tKugC_FRfrDyYirNufGl3gRLarvgqur354wQ']; //paste your cookie
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-imran.onrender.com/bing-img?prompt=${encodeURIComponent(prompt)}&cookie=${cookie}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "Bing Search Result\n\nPrompt: " + prompt + "\n\n#Number of Images: " + numberSearch
    }, event.threadID, event.messageID); 

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};
