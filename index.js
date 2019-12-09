const axios = require("axios");
const telegram = require("./lib/telegram");
const {telegramChannel} = require("./lib/constants");

exports.handler = async event => {
  try {
    const channelId = event.telegramChannel || telegramChannel;
    const url = await telegram.url(channelId);
    await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
