const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_53_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMaGJ5U2F0aEZxYnphbktUV3pYTFFlTzU5NkllaDZaZDRXS1Q1K2Q5UURFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5OTkwNTc3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkY5NTJFM0ZCM0FFODgxNDc4NERBRkEyRjEzQTIyMDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDg3MjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk5OTA1Nzc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRUQ1QjVEODk1REI0QTg5MkVDRDdCRjY0Q0RDRkY2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0ODcyMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXprb3ItWlhUdFNiU1hWVlZsRGx4Z1wiLFxuICBcInBob25lSWRcIjogXCI1MmUyNjdiNS0yYzJiLTRmZjAtOGYyYy02OGRiYmI2YWYyYjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxMjMsXG4gICAgICAyMjIsXG4gICAgICAzNSxcbiAgICAgIDIxMyxcbiAgICAgIDUyLFxuICAgICAgODIsXG4gICAgICAxMzMsXG4gICAgICAxMDgsXG4gICAgICA5NyxcbiAgICAgIDEzNyxcbiAgICAgIDIwMyxcbiAgICAgIDExMCxcbiAgICAgIDE4NCxcbiAgICAgIDEzNSxcbiAgICAgIDMxLFxuICAgICAgMTM5LFxuICAgICAgMjIsXG4gICAgICA0MCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAyMzYsXG4gICAgICA2MCxcbiAgICAgIDkxLFxuICAgICAgMTg4LFxuICAgICAgMTIzLFxuICAgICAgNzAsXG4gICAgICAxNzIsXG4gICAgICA5MyxcbiAgICAgIDcsXG4gICAgICAxNjYsXG4gICAgICAzMCxcbiAgICAgIDEwMCxcbiAgICAgIDIzMixcbiAgICAgIDc1LFxuICAgICAgNixcbiAgICAgIDE5MCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMixcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2YnpmNENFT2llNzdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWVBXbGttV0hMenUwK0hBL2hhWVpnOUpLM1dYbitsdXN1TDVBWXF3SzAydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBejVYNWlnTGZtU1JPUlp5TlFKQ0x5ZEgzSHljLzhCN3RBYjN1dkgvUVJMbjhuNG81WnhSaU8xL01JUElmbUFHWWVUZCt3bVBCVU1IYzQ5SEc3dklEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmZ0k5dndZU0NiaEdqVVMrdmRBaDE5Y1Rjcm9FTFNGaHo2a0dsa3hmOGk4WUR5Zk1nRUorZE95Tm5wc0l3L0tZZDdFUTZTMmtHQTFCSHFVL251N1pndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5OTkwNTc3Nzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2MTY0Mzg3OTEzNzg4OjgxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1pbWlcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5OTkwNTc3Nzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDg3MjEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjBhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMGEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0OFlNU3RWUG9aK0ZuR2NiZTlhczg2WDYrVW9aRVFnNVgvL3JodkJwNXNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMjM4NTQwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDM1NTEyNjMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
