module.exports.config = {
  name: "🙃", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["- দেহো পাশে কেউ কেঁদো না গল্প গুলো রেখো অজানা গান খানা থেকে খুঁজে নিও মুর সে গল্প! 🖤✨","✿..(｡♡‿♡｡)..✿:ভালোবাসা শুরু হয় শেষ হয় না.!\n\nহয়তো এক সময় ভালোবাসার মানুষটা হারিয়ে যায়, তবে ভালোবাসা হারায় না..! বরং মনের গভীরে থেকে যায়..😌🌼"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/uc?id=17585edZNLDIYMbxZzYy3Xtqny1xWL9Ud",
    "https://drive.google.com/uc?id=178dOeRg7vxjkX3EKBgg9z-c82Vj24_fn",
    "",
    "",
    "",
    "",
    ""

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };


