//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "punta10020@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/CS983iG1umoBvdwbVpf2yg";
global.website = process.env.GURL || "https://chat.whatsapp.com/CS983iG1umoBvdwbVpf2yg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/d7sUWTw.jpeg";
global.devs = "https://wa.me/237672334928 , https://wa.me/237672334938";
global.sudo = process.env.SUDO || "237672334938";
global.owner = process.env.OWNER_NUMBER || "237672334938";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/d7sUWTw.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkg4dGNhWG1pdzZRaWE3dnNMajk3dFpiaWhyQ0JJTk1tam51R2lYMzQwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDhuUlQ1MHVkZjROMlhkRkY0Z1RKNHRMZzRWM3V3SGxqVTUrVjVNcWVXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRXJBS1hZbVFObGZwbFlMdU53ZmVobGpSUEdjQ0FERTg5L1Fva3NuWG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdkd0a1pSK282RFlRYURabEtkYlJPaHVXQTd5dDUzZzgzQXBsdlQvSEJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOWDZyR0l5V3NvQTRMSTdNZjlwM0RjOFQzWVdKVGprZjg5ejN5M1JxbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx3RGZjc2pmQzZmVDdVSkNieGloM1pQcHRISCtLVUJIV21lZlRMc0g4elU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dMVWY4R1hUYmc2S2ZjRmFIWERJNllEbnBUd0xEa0FEUTYxOG9hV0luZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk5jUzFZeUpEa0tVZWxRQnIySEtueE5vY3QxVDRseHFGQUVqMjlEUEltST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDZ2wxcHV1dmNkL2pzVU9GNHJUb0NlS2w1YWxza2ZxdzBieVhOUzY3NXBzcWZJa1BrU3V0dzdzRUlXZjBnMGR6T3h2VElldHptaHJCSG5iUy95NEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJ1ODUvdVdoKzNSamV6dWtHVm01eWlRWUNPM0ZXMytqanZ5NnZONmVaNGowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJadFRTZVpZeVRWLWNKZE9hRTlhbm1nIiwicGhvbmVJZCI6ImU0NTczOWUwLWVkMDctNGU0MS1iM2FlLTMyMmM5ZmE3MTcwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUYjkxWFlTOHRVYXBwVEpaU01Ra2hOcWwvanM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXJWcktVQW1LNytLS21tK0IxYWthMmJsTlBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZNMk40TDZQIiwibWUiOnsiaWQiOiIyMzc2NzIzMzQ5Mzg6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSm9yZGFuZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhsb253UXdvdi91UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVk4dFVGZTYvNUZ0bkUrN0plbjV4TVVoTFZGSDJuTHJ5UWZwOHp4ek5uZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUXVlQWRINWswUnppaXBLM3ZPSURQVTNsY0VCM2c3KytDWUtQRis0VElPc1pmSTV2QzdKRFVmbTU0TFN1dTlXZ1pMYmVZSm1uelhmVWxHekRQNWM3Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImJIRWpnY2FDZnh2ajdId1dGK29pR0VaOE40SHN3emEwVjVMelBOc09WK3Voa1lsdUlrNFgvK2Z6amtZL2lYWWlGRGt0NFhmK1Z2WVArV3cxTUNiWUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjcyMzM0OTM4OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFHUExWQlh1ditSYlp4UHV5WHArY1RGSVMxUlI5cHk2OGtINmZNOGN6WjQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIyMzI2NTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmlBIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`jordane j`",
  author: process.env.PACK_AUTHER || "jordane",
  packname: process.env.PACK_NAME || "FH",
  botname: process.env.BOT_NAME || "jordan",
  ownername: process.env.OWNER_NAME || "jirdan",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
