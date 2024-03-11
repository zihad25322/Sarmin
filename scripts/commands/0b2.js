module.exports = {
  config: {
    name: "create",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan", //imran
    description: "",
    prefix: true,
    category: "with prefix",
    usages: "bing prompt",
    cooldowns: 10,
},

   languages: {
   "vi": {},
       "en": {
           "missing": 'use : /bing cat'
       }
   },

start: async function({ nayan, events, args, lang}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const prompt = args.join(" ");
    if(!prompt) return nayan.reply(lang('missing'), events.threadID, events.messageID)

  const rndm = ['1o-0Pc00DPMoLU0aH2lBVnY1CcRA24kq6L3SSjJecXHHy-H5ZWYqiLkBO69Ml-p1lmv5SVkOnsj6O3N-u7vL-1qDzpDVP9cpluZ5KO2wCBYhKMcjqJ_461vhJas2M6e41bu8XPu05q8lyqBzXBYT_2Mxuqv-isfBAasVrIO0BGXgW4PRkymiuqgqJov588usI9GIn0jkLbAp90UKuhTcZ4A'] // input your cookie hare

  var cookie = rndm[Math.floor(Math.random() * rndm.length)];


  const res = await axios.get(`https://bing-imran.onrender.com/bing-img?prompt=${encodeURIComponent(prompt)}&cookie=${cookie}`);

  
  console.log(res.data)
    const data = res.data.result;
  const numberSearch = data.length
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    
    nayan.reply({
        attachment: imgData,
        body: "🔍Bing Search Result🔍\n\n📝Prompt: " + prompt + "\n\n#️⃣Number of Images: " + numberSearch
    }, events.threadID, events.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
}
  
