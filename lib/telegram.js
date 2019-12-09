const queryString = require("query-string");
const youtube = require("./youtube");
const {telegramChannel, telegramBotToken} = require("./constants");

exports.url = async () => {
  try {
    const video = await youtube.video();

    const params = queryString.stringify({
      chat_id: telegramChannel,
      text: `Enjoy your daily dose of BBC Earth ${video}`
    });

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?${params}`;

    console.log("[TELEGRAM API] URL:", url);

    return url;
  } catch (error) {
    console.error(error);
  }
};
