const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'a8Zy3ZQJ#Ubh8YHbsE2HD3MQLKTJoqtxb5xCjKJ2tHVMlpM8Xiwz4',
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE, 
MV_BLOCK: process.env. MV_BLOCK === undefined ? 'true' : process.env. MV_BLOCK,    
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, 
SEEDR_MAIL: '',
    SEEDR_PASSWORD: '',
SUDO: '',//
DB_NAME: 'pramaaaataaaaaaaaaajjaa',
LANG: 'SI',
OWNER_NUMBER: '94724884317',

};
//GITHUB_AUTH_TdOKEN: 'ouvnI0xSDsmfWA1filVxx.SZ0vJGYkjlC5VX54U0e10',

