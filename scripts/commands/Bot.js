module.exports.config = {
  name: "anime", 
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
   var hi = [" ANIME"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "",
   "https://drive.google.com/uc?id=16lOXxs-Z9u-mxttFnwWzdUHvrP55aHnZ"

];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };


