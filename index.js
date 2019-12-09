const axios = require("axios");
const telegram = require("./lib/telegram");
const {telegramChannel} = require("./lib/constants");

exports.handler = async event => {
  try {
    const channel = telegramChannel;
    const url = await telegram.url(channel);
    await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
