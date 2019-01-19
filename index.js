const axios = require('axios');
const telegram = require('./lib/telegram');

exports.handler = async (event) => {
    try {
        const url = await telegram.url();
        await axios.get(url);
    } catch (error) {
        console.error(error);
    }  
};
