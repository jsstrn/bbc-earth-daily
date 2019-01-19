const urlencode = require('urlencode');
const youtube = require('./youtube');
const {telegramChannel: channel, telegramBotToken: token} = require('./constants');

exports.url = async (event) => {
    try {
        const video = await youtube.video();
        const content = urlencode(`Enjoy your daily dose of BBC Earth ${video}`);
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${channel}&text=${content}`;
        return url;
    } catch (error) {
        console.error(error);
    }  
};
