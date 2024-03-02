/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "me",
    version: "2.0.0",
    permssion: 0,
    credits: "Mohammad Nayan",
    description: "",
    prefix: true,
    category: "Love",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};


module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['1o-0Pc00DPMoLU0aH2lBVnY1CcRA24kq6L3SSjJecXHHy-H5ZWYqiLkBO69Ml-p1lmv5SVkOnsj6O3N-u7vL-1qDzpDVP9cpluZ5KO2wCBYhKMcjqJ_461vhJas2M6e41bu8XPu05q8lyqBzXBYT_2Mxuqv-isfBAasVrIO0BGXgW4PRkymiuqgqJov588usI9GIn0jkLbAp90UKuhTcZ4A']; //paste your cookie
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
